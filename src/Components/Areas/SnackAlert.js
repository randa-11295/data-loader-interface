import { useEffect, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { hiddenNotificationHandel } from "../../Redux/sliceReducers/notificationsSlice";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

function Transition(props) {
  const language = useSelector((state) => state.translation.language);

  return <Slide {...props} direction={language === "en" ? "right" : "left"} />;
}

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackAlert() {
  const dispatch = useDispatch();
  const snackAlertState = useSelector((state) => state.isShowed);

  useEffect(() => {
    if (snackAlertState.isShowed) {
      setTimeout(() => {
        handleClose();
      }, 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snackAlertState.isShowed]);

  const handleClose = () => {
    dispatch(hiddenNotificationHandel());
  };

  return (
    <div>
      <Snackbar
        open={snackAlertState.isShowed}
        sx={{ width: { md: "300px" } }}
        TransitionComponent={Transition}
      >
        <Alert
          severity={snackAlertState.val?.variant || "success"}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {
            " every thing is okay"}
        </Alert>
      </Snackbar>
    </div>
  );
}

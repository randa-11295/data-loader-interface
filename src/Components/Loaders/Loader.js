import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  const boxStyle = {
    color: "secondary.main",
    bgcolor: "default.main",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };
  return (
    <Backdrop sx={boxStyle} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

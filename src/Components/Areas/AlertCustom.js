import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const AlertCustom = () => {
  return (
    <Alert severity="info" sx={{borderLeft: 5 ,  mt :2 }}>
      <AlertTitle><b>Warning</b></AlertTitle>
      This is an info alert — check it out!
    </Alert>
  );
};

export default AlertCustom;

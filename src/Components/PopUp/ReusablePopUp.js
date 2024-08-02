import {
  Dialog,
  Button,
  DialogContent,
  DialogTitle,
  DialogActions,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DesBtn from "../Inputs/DesBtn";



export default function ReusablePopUp(props) {
  


  return (
    <Dialog
      open={props?.isOpen}
      onClose={props?.handleClose}
      fullWidth
      maxWidth={"md"}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        
        sx={{width : "100%"}}
      >
        <DialogTitle   component="div" sx={{flexGrow : 1, fontSize : "1rem" ,width : "calc(100% - 80px)" }} >
        {props.title}
        </DialogTitle>
        <DesBtn fun={props.handleClose} close text={"cancel"}>
          <CloseIcon />
        </DesBtn>
      </Stack>

      <Divider sx={{ mb: 1 }} />
      <DialogContent>{props.children}</DialogContent>
      <Divider sx={{ pt: 1 }} />
      <DialogActions
        sx={{ px: 3, py: 2, m: 0, justifyContent: props.clearHandel && "space-between" }}
      >
        {props.clearHandel && (
          <Button onClick={props.clearHandel}>
            <Box
              component="span"
            >
              {"clear"}
            </Box>
          </Button>
        )}

        <div>
          {props.sendReq && (
            <Button
              onClick={props.sendReq}
              variant="contained"
              sx={{ boxShadow: "none", mx: 1 }}
            >
              save
            </Button>
          )}
          <Button onClick={props.handleClose} variant="outlined">
            cancel
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

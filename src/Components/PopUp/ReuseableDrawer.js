import {
  Drawer,
  Button,
  Stack,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DesBtn from "../Inputs/DesBtn";
import CloseIcon from "@mui/icons-material/Close";
import useContentHook from "../../hooks/useContentHook";


const ReuseableDrawer = (props) => {

  const { getContentText } = useContentHook();

  return (
    <Drawer
      anchor="bottom"
      open={props.isOpen}
      onClose={props.handleClose}
      sx={{ "& .MuiPaper-root": { minHeight: "100%" } }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <DialogTitle component="div" sx={titleStyle}>
          <Box component="span">{props?.title } </Box>
        </DialogTitle>
        <DesBtn fun={props.handleClose} close text={getContentText("popUp_cancel")}>
          <CloseIcon />
        </DesBtn>
      </Stack>

      <DialogContent dividers sx={{ px: 4}}>
        {props.children}
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          variant="contained"
          onClick={props.handleClose}
          sx={{
            width: { xs: "100%", md: "150px" },
          }}
        >
          {getContentText("popUp_back")}
        </Button>
      </DialogActions>
    </Drawer>
  );
};

const titleStyle = {
  fontSize: { xs: ".9rem", md: "1.2rem" },
  width: "calc(100% - 40px)",
  color: "primary.main",
  p: 0,
};

export default ReuseableDrawer;

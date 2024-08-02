import { useState } from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
export default function CustomPopUpBottomDrowner(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <>
      {!isOpen && (
        <Button variant="outlined" onClick={toggleDrawer(true)} sx={btnStyle}>
          <FilterAltOutlinedIcon />
        </Button>
      )}
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { md: "none" } }}
      >
        <Typography sx={{ pt: 2, px: 2 }}>{props.title} : </Typography>

        <Box sx={{ py: 1.5, px: 1 }} role="presentation">
          {props.children}
        </Box>
      </Drawer>
    </>
  );
}

const btnStyle = {
  borderRight: "none !important",
  borderRadius: "20px 0 0 20px",
  minWidth: "0",
  background: "white !important",
  position: "fixed",
  top: "50%",
  right: "0",
  zIndex: "1200",
  boxShadow: 3,
};

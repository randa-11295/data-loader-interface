import { Button, Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { countries } from "../../utils/StaticVariables";
import { useDispatch , useSelector } from "react-redux";
import { updateChosenCountryPhoneNum } from "../../Redux/sliceReducers/globalVarsSlice";


export default function CountyMenu() {
  
  const dispatch = useDispatch();
  const language  = useSelector((state) => state.translation.language);
  const [anchorEl, setAnchorEl] = useState(null);
  const [chosenCountry, setChosenCountry] = useState({
    code: "SA",
    label: "Saudi Arabia",
    phone: "966",
  });

  const changeChosenCountryHandle = (val) => {
    setChosenCountry(val);
    dispatch(updateChosenCountryPhoneNum(val.phone));
    handleClose()
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const FlagImg = ({ title, code }) => (
    <img
      loading="lazy"
      width="20"
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      alt={title || ""}
    />
  );

  return (
    <div>
      <Stack
        direction={language === "en" ? "row" : "row-reverse"}
        alignItems="center"
      >
        <Button
          id="basic-button"
          sx={{
            bgcolor: "#f1f1f1 !important",
            height: "55px",
           
            px: 1.5,
            minWidth: "0",
          }}
          onClick={handleClick}
        >
          <FlagImg title={chosenCountry?.label} code={chosenCountry?.code} />
        </Button>
        <Typography component="p" mx={1}>
          {chosenCountry?.phone}
        </Typography>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ maxHeight: "400px" }}
      >
        {countries.map((option) => (
          <MenuItem
            key={option.label + option.code}
            value={option.label}
            onClick={() => changeChosenCountryHandle(option)}
          >
            <FlagImg title={option.label} code={option.code} />

            <Box component="span" sx={{ pl: 1.5 }}>
              {option.label}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

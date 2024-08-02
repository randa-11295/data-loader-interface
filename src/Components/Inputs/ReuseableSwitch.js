import { styled } from "@mui/material/styles";
import { FormGroup, Switch, Grid, Typography } from "@mui/material";
import { useState,  } from "react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function ReuseableSwitch(props) {
  const [checked, setChecked] = useState(props.formik.values[props.name] );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.formik.values[props.name] = event.target.checked;
  };

  return (
    <FormGroup>
      <Grid container pb={2}>
        <Grid item xs={10} sm={6}>
          <Typography
            color="secondary"
            variant="h6"
            sx={{ fontSize: ".9rem", fontWeight: 600, pb: 1 }}
          >
            {props?.label} :
          </Typography>

          {props?.des && <p> {props?.des}. </p>}
        </Grid>
        <Grid item xs={2} sm={6}>
          <IOSSwitch sx={{ mt: 1 }} checked={checked} onChange={handleChange} />
        </Grid>
      </Grid>
    </FormGroup>
  );
}

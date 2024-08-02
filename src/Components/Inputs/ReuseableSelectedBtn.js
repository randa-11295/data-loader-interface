import { useEffect, useState } from "react";
import { ToggleButton, Avatar, Typography, Grid } from "@mui/material";
import { getAssetURL } from "../../utils/helperFuncations";
export default function ReuseableSelectedBtn(props) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected(props.formik.values[props.name]);
  }, [props.formik.values, props.name]);

  useEffect(() => {
    props.formik.values[props.name] = selected;
  }, [props.formik.values, props.name, selected]);

  const handleChange = (val) => {
    const thisSelected = selected;
    thisSelected.includes(val)
      ? setSelected(thisSelected.filter((el) => el !== val))
      : setSelected([val, ...thisSelected]);
  };

  return (
    <>
      <Typography color="secondary" variant="h6" sx={textStyle}>
        {props?.label} :
      </Typography>

      <Grid container spacing={1}>
        {props.arr.map((el) => (
          <Grid item xs={6} sm={3} md={2} key={el.val}>
            <ToggleButton
              color="secondary"
              onChange={() => handleChange(el.val)}
              value={el.val}
              selected={selected.includes(el.val)}
              sx={toggleBtnStyle}
            >
              <Avatar
                alt={el.name}
                variant="square"
                src={getAssetURL(el?.iconId)}
                sx={{ filter: "", borderRedis: "0" }}
              />

              <Typography sx={{ fontSize: ".8rem", textAlign: "start" }}>
                {el.label}
              </Typography>
            </ToggleButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const toggleBtnStyle = {
  width: "100%",
  height: "130px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  m: "auto",
};

const textStyle = { fontSize: ".9rem", fontWeight: 600, pt: 2, pb: 2 };

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const textStyle = {
  fontSize: ".8rem",
};

const CheckArea = (props) => {



  return (
    <FormControlLabel
      sx={{ fontSize: ".8rem" }}
      value="end"
      control={<Checkbox checked={props.check} onChange={props.fun} />}
      label={
        <Typography variant="p" component="p" sx={textStyle}>
          {"remember Me"}
        </Typography>
      }
    />
  );
};

export default CheckArea;

import {
  OutlinedInput,
  FormHelperText,
  FormControl,
  Typography,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DesBtn from "./DesBtn";

export default function InputWithBtn(props) {
  let isError =
    props.formik?.touched[props.name] &&
    Boolean(props.formik?.errors[props.name]);

  let textHelp =
    (props.formik?.touched[props.name] &&
      props?.formik?.errors[props.name]?.replaceAll(".", "_")) ||
    " ";

  return (
    <FormControl
      fullWidth
      sx={{mb: 2}}
    >
      <Typography
        color="secondary"
        variant="h6"
        sx={{ fontSize: ".9rem", fontWeight: 600, textTransform: "capitalize" }}
      >
        {props.label} :
      </Typography>

      <OutlinedInput
        sx={styleInput}
        size="small"
        placeholder={props.label}
        value={props.formik?.values[props.name]}
        onChange={props.formik?.handleChange}
        onBlur={props.formik?.handleBlur}
        name={props.name}
        error={isError}
        endAdornment={
          <InputAdornment position="end">
            <DesBtn
              fun={props.handleIcon}
              text={props.iconText || ""}
              place="bottom"
              withoutStyle
            >
              <SendIcon sx={{ fontSize: "1.1rem" }} />
            </DesBtn>
          </InputAdornment>
        }
       
      />
      {props.helpDes && (
        <FormHelperText sx={{ color: "error.main" }}>{textHelp}</FormHelperText>
      )}
    </FormControl>
  );
}

const styleInput = {
  mb: 1,
};

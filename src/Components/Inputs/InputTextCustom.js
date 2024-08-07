import { TextField, Typography } from "@mui/material";


const InputTextCustom = (props) => {
  let isError =
    props.formik?.touched[props.name] &&
    Boolean(props.formik?.errors[props.name]);

  let textHelp =
    (
      props.formik?.touched[props.name] && props.formik.errors[props.name]
    )?.replace(".", "_") || " ";

  const styleInput = {
    " & .MuiOutlinedInput-root ": props.phone && {
      p: "0 ",
    },
  };

  return (
    <div>
      <Typography
        color="secondary"
        variant="h6"
        sx={{ fontSize: ".9rem", fontWeight: 600 , textTransform : "capitalize" }}
      >
        {props.label} :
      </Typography>
      <TextField
        fullWidth
        size="small"
        placeholder={props.label}
        value={props.formik?.values[props.name]}
        onChange={props.formik?.handleChange}
        onBlur={props.formik?.handleBlur}
        error={isError}
        helperText={textHelp}
        name={props.name}
        type={props.type || "text"}
        sx={styleInput}
        multiline={props.multi || false}
        minRows={6}
        disabled={props.disabled}
        
      />
    </div>
  );
};

export default InputTextCustom;

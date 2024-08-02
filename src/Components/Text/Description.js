import Typography from "@mui/material/Typography";

export default function Description(props) {
  const textStyle = {
    fontSize: "1rem",
    color: props.isError ? "error.main" : "text.secondary",
    padding: "0 4px",
    textAlign: "center",
    fontWeight: props.active && "600",
  };

  return (
    <Typography variant="span" component="span" sx={textStyle}>
      {props.text}
    </Typography>
  );
}

import Typography from "@mui/material/Typography";

const textStyle = {
  fontWeight: "700",
  fontSize: "1.55rem",
  color : "secondary.main"
};

export default function Title(props) {
  return (
    
    <Typography variant="h5" component="h5" sx={textStyle}>
      { props.text || "Heading"}
    </Typography>
  );
}

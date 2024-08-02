import { Typography, Avatar, Stack } from "@mui/material";


const AvatarCard = (props) => {
  return (
    <Stack
      onClick={()=>{props.fun(props.data)}}
      sx={cardStyle()}
      justifyContent="space-between"
      spacing={0.25}
      alignItems="center"
    >
      {/* icon and image */}
      <Avatar
        alt={props.data?.name}
        src={props.data?.imgSrc}
        sx={ImageStyle()}
      />

      {/* text and title  section */}
      <Stack justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
        <Typography variant="p" sx={textStyle}>
          {props.data?.name}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AvatarCard;

const cardStyle = () => ({
  fontSize: ".8rem",
  p: 1,
  minHeight: "90px",
  cursor: "pointer",
  transition: ".4s",
  color: "secondary.main",
  "&:hover": {
    color: "primary.main",
  },
  "&:hover *": {
    borderColor: "primary.main",
  },
  
});

const ImageStyle = () => ({
  border: 1,
  p: 1,
  transition: ".3s",
  borderColor: true ? "secondary.main" : "#5a5a5a",
  width: "40px",
  height: "40px",
});

const textStyle = {  fontWeight: "700", fontSize: "1rem" , pt : .5};

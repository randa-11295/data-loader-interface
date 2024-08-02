import { Tooltip, Avatar } from "@mui/material";

const DesAvatar = (props) => {
  return (
    <Tooltip title={props.text} placement={props.place} arrow>
      <Avatar sx={props.style} src={props.src} />
    </Tooltip>
  );
};

export default DesAvatar;

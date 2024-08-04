import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// this component used to make a description simple pop up on icon button
// its required to send icon component to render it inside icon btn
// and it required text description also to render it in side pop up

export default function DesBtn(props) {
  return (
    <Tooltip
      title={props.text}
      placement={
        // control pop up place
        props.place || (!props.close ? "top" : "left")
      }
      arrow
    >
      <IconButton
        color={!props.close ? "primary" : "default"} // make btn color gray if it close btn
  
        onClick={props.fun}
        type={props.type || "button"}
      >
        {/* te dynamic icon components send from parents */}
        {props.children}
      </IconButton>
    </Tooltip>
  );
}

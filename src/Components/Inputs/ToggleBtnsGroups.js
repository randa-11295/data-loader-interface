import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { v4 as uuid } from "uuid";

export default function ToggleBtnsGroups(props) {
  return (
    <ToggleButtonGroup
      color="secondary"
      value={props.val}
      exclusive
      onChange={props.changeHandel}
      fullWidth
      sx={{background :"white"}}
    >
      {props.arr?.map((el) => (
        <ToggleButton key={uuid()} value={el}>
          {el.typeService}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

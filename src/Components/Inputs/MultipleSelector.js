import { useEffect, useState } from "react";
import {
  Box,
  Autocomplete,
  Typography,
  Checkbox,
  Chip,
  ListItemButton,
  TextField,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function MultipleSelector(props) {
  const [val, setVal] = useState([]);

  useEffect(() => {
    if (!props.options[0]) return;
    setVal(props.options);
    props?.changeValHandel([props.options[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.options]);

  return (
    <Box noValidate autoComplete="on" sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        size="small"
        sx={{
          color: "text.secondary",
          fontSize: "14px",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
      >
        {props?.label}
      </Typography>

      <Autocomplete
        onChange={(e, vals) => {
          setVal(vals);
          props?.changeValHandel(vals);
        }}
        multiple
        size="small"
        disableClearable
        options={props?.options}
        value={val}
        disableCloseOnSelect
        getOptionLabel={(el) => el.name}
        renderTags={(tagValue, getTagProps) =>
          tagValue?.map((el, index) => (
            <Chip
              label={el.name}
              {...getTagProps({ index })}
              disabled={val.length < 2 && val.includes(el)}
              sx={{ mx: 0.4, borderRadius: "5px" }}
              variant="outlined"
              color="secondary"
            />
          ))
        }
        renderOption={(props, el, { selected }) => (
          <ListItemButton
            sx={{ width: "100%" }}
            {...props}
            disabled={val.length < 2 && val.includes(el)}
          >
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              sx={{ mr: 1 }}
              checked={selected}
              color="secondary"
            />
            {el.name}
          </ListItemButton>
        )}
        renderInput={(params) => <TextField {...params} size="small" />}
      />
    </Box>
  );
}

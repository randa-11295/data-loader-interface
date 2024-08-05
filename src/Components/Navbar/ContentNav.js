import Toolbar from "@mui/material/Toolbar";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import logo from "../../images/logo.png"
const ContentNav = (props) => {
  let location = useLocation();
  let navigate = useNavigate();

  const changeRouteHandel = (url) => {
    props.mob && props.openHandel();

    navigate(`${url}`);
  };

  const isSelectedCheck = (url, path) =>
    url === path || (path === "/" && url === "");

  const listStyle = (url, path) => {
    return {
      background: isSelectedCheck(url, path) ? "white" : "inherit",
      color: isSelectedCheck(url, path) ? "secondary.main" : "inherit",
    };
  };

  const iconStyle = (url, path) => ({
    color: isSelectedCheck(url, path) ? "secondary.main" : "white",
  });

  return (
    <Box sx={boxStyle}>
      <Toolbar
        sx={logoStyle}
        onClick={() => changeRouteHandel("summary")}
      ></Toolbar>

      <List sx={{ pt: "1px" }}>
        {[
          "summary",
          "output",
          "jobs",
          "sitting Connectors ",
          "sitting  global ",
        ].map((el) => (
          <ListItem
            sx={listStyle(el.url, location.pathname)}
            key={el}
            disablePadding
            onClick={() => {
              changeRouteHandel("/" + el);
            }}
          >
            <ListItemButton
              sx={{ justifyContent: "space-between", display: "flex" }}
            >
              <ListItemText primary={el} sx={{ textAlign: "start" }} />
              {/* <ListItemIcon sx={iconStyle(el.url, location.pathname)}>
                {el.icon}
              </ListItemIcon> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContentNav;

const logoStyle = {
 backgroundImage: `url(${logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
  cursor: "pointer",
  my: 2
};

const boxStyle = {
  bgcolor: "secondary.main",
  color: "#fff",
  height: "100vh",
  overflow: "auto",
};

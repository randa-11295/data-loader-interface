import Toolbar from "@mui/material/Toolbar";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import logo from "../../images/logo.png";
import ReusableAccordion from "../Reusable/ReusableAccordion";
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';

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
      textTransform: "capitalize",
      fontSize: "3rem",
      fontWeight: "bold"
    };
  };


  const iconStyle = (url, path) => ({
    color: isSelectedCheck(url, path) ? "secondary.main" : "white",
    textAlign: "right" ,
    width : "max-content", 
    marginLeft: "auto", 
    fontSize : "1.3rem",
   
  });

  const ItemComponent = (item) => (
    <ListItem
      sx={listStyle(item.url, location.pathname)}
      key={item.url + item.name}
      disablePadding
      onClick={() => {
        changeRouteHandel(item.url);
      }}
    >
      <ListItemButton sx={{ justifyContent: "space-between", display: "flex" }}>
        <ListItemText  primary={item.name} sx={{ textAlign: "start" ,  }} />
        <ListItemIcon >
          {item.icon(iconStyle(item.url, location.pathname))}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box sx={boxStyle}>
      <Stack justifyContent="space-between" sx={{ height: "100%" }}>
        <div>
          <Toolbar
            sx={logoStyle}
            onClick={() => changeRouteHandel("/")}
          ></Toolbar>

          <List sx={{ pt: "1px" }}>
            {contentNavArr.map((el) => ItemComponent(el))}
          </List>
        </div>

        <div>
          {/* <ListItemButton> */}
          <ReusableAccordion title="Settings">
            <List sx={{ pt: "1px" }}>
              {SettingsNavArr.map((el) => ItemComponent(el))}
            </List>
          </ReusableAccordion>
        </div>
      </Stack>
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
  my: 2,
};

const boxStyle = {
  bgcolor: "secondary.main",
  color: "#fff",
  height: "100vh",
  overflow: "auto",
};

const contentNavArr = [
  {
    url: "/",
    name: "summary",
    icon:(styleIcon)=> <SummarizeOutlinedIcon sx={styleIcon} />,
  },
  {
    url: "/output",
    name: "output",
    icon:(styleIcon)=>  <OutputOutlinedIcon sx={styleIcon}/>,
  },
  {
    url: "/jobs",
    name: "jobs",
    icon: (styleIcon)=> <WorkOutlineOutlinedIcon sx={styleIcon}/>,
  },
]

const SettingsNavArr =[
  
    {
      url: "/Settings-connectors",
      name: "Connectors",
      icon:(styleIcon)=>  <LanOutlinedIcon sx={styleIcon}/>,
    },
    {
      url: "/Settings-global",
      name: "Global",
      icon: (styleIcon)=> <PublicOutlinedIcon sx={styleIcon}/>,
    },
  ]

import { useKeycloak } from "@react-keycloak/web";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LoadBtn from "../Inputs/LoadBtn";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useContentHook from "../../hooks/useContentHook";
import { getStaticAssetURL } from "../../utils/helperFuncations";

const Welcome = () => {
  const { keycloak } = useKeycloak();
  const [loading, setLoading] = useState(false);
  const { getContentText } = useContentHook();

  const connectToKeyCloak = () => {
    setLoading(true);
    keycloak.login();
  };

  return (
    <Paper
      elevation={6}
      sx={{
        width: { xs: "80%", sm: "370px" },
        p: 2,
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h5">
          {getContentText("welcome")}
        </Typography>
        <Box sx={bgStyle} />
      </CardContent>
      <CardActions>
        <LoadBtn login fun={connectToKeyCloak} loading={loading} />
      </CardActions>
    </Paper>
  );
};

export default Welcome;

const bgStyle = {
  backgroundImage: `url(${getStaticAssetURL("logo.png")})`,
  backgroundSize: "contain",
  height: "200px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: 2,
};

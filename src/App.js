import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./utils/theme";
import { AppRouter } from "./routes";
// import SnackAlert from "./Components/Areas/SnackAlert";
import { Box } from "@mui/system";
export default function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      {/* <ReactKeycloakProvider authClient={keycloak} onTokens={tokenLogger}> */}
      <Box sx={{ background: "#f6f8f9 " }}>
        <AppRouter />
      </Box>

      {/* <SnackAlert /> */}
      {/* </ReactKeycloakProvider> */}
    </ThemeProvider>
  );
}

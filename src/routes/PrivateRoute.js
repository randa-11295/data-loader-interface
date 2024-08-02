// import { useKeycloak } from "@react-keycloak/web";
import Rejecter from "../Pages/Rejecter";
const PrivateRoute = ({ children }) => {
//  const { keycloak } = useKeycloak();

//  const isLoggedIn = keycloak.authenticated;

 return true ? children : <Rejecter />;
};

export default PrivateRoute;
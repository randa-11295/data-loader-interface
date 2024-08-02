import Keycloak from 'keycloak-js';


const keycloak = Keycloak({
  url: 'https://auth.tabaqat.net/auth',
  realm: 'mapsaudi',
  clientId: 'mapsaudi-dashboard',
});

export default keycloak;

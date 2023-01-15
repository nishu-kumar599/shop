import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  userIsLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export default AuthContext;

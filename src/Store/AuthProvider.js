import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
const AuthProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const navigate = useNavigate();
  const userIsLoggedIn = !!token;
  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    navigate({ pathname: "/dashboard" }, { replace: false });
  };
  const handelLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate({ pathname: "/" }, { replace: false });
  };
  const authContext = {
    token: token,
    userIsLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handelLogout,
  };
  return (
    <>
      <AuthContext.Provider value={authContext}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;

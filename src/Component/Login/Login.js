import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "../Login/Login.css";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../Store/AuthContext";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value) {
      setEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password) {
      setPassword(password);
    }
  };

  const handleSubmit = async () => {
    try {
      const Data = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_CtGbaqkM1CY4aiwvXWF3G8ahoZW4FJI",
        {
          email: email,
          password: password,
        }
      );

      if (Data) {
        authCtx.login(Data.data.idToken);
      }
    } catch (err) {
      const error = err.response.data.error.message;
      alert(error);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="text-3xl text-red-800 font-bold underline">
                <h1>Login</h1>
              </div>
            </div>
            <div className="row mt-2 justify-content-center text-center">
              <div className="col-sm-5 py-5  bg-black text-center login_form">
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <br />
                <button
                  className="fw-semibold rounded-2 px-3 py-2 text-center"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

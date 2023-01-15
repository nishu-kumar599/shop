import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Signup from "../Signup/SignUp";
import Login from "../Login/Login";

const LoginSignButtonPage = () => {
  const [login, setLogin] = useState(false);
  const signupHandle = () => {
    setLogin((change) => !change);
  };
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-12 text-center changebutton">
              {login ? <Signup /> : <Login />}
              <button
                className="fw-semibold rounded-2 px-3 py-2 text-center changevalue mt-4"
                onClick={signupHandle}
              >
                {login ? "Login" : "signUp"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginSignButtonPage;

import "bootstrap/dist/css/bootstrap.css";
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
              {login ? (
                <h3 className="mt-3">Already have account ?</h3>
              ) : (
                <h3 className="mt-3">Don't have an account yet ?</h3>
              )}
              <button
                className="fw-semibold rounded-2 px-3 py-2 text-center changevalue mt-2"
                onClick={signupHandle}
              >
                {login ? " Login " : " Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginSignButtonPage;

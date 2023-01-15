import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Signup/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleEmailchange = (e) => {
    const email = e.target.value;
    if (email) {
      setEmail(email);
    }
  };
  const handelPasswordChange = (e) => {
    const password = e.target.value;
    if (password) {
      setPassword(password);
    }
  };
  const handleSubmit = async () => {
    try {
      const Data = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_CtGbaqkM1CY4aiwvXWF3G8ahoZW4FJI",
        {
          email: email,
          password: password,
        }
      );
      if (Data) {
        navigate({ pathname: "/" }, { replace: false });
        alert("successfully Create account");
      }
    } catch (err) {
      const error = err.response.data.error.message;
      alert(error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-12 text-center mt-4">
              <h1>SignUp</h1>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-sm-5 py-5  bg-black text-center signup_form">
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={handleEmailchange}
                />
                <br />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={handelPasswordChange}
                />

                <br />
                <button
                  className="fw-semibold rounded-2 px-3 py-2 text-center text-center"
                  type="button"
                  onClick={handleSubmit}
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;

import React, { useState } from "react";
// import "../Login/Login.css";
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
      <h1 className="mb-5 font-bold text-4xl mt-10 text-center">Login</h1>
      <div className="desktop:w-2/5 laptop:w-2/5 mx-auto bg-black py-10 px-10  mobile:w-full">
        <div className="rounded-sm text-center">
          <input
            className="min-w-full small:w-full extra:w-full rounded-sm"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="rounded-sm mt-6 text-center">
          <input
            className="min-w-full small:w-full extra:w-full rounded-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          className="border-2 rounded-lg text-black mt-8 py-2 font-semibold px-3 bg-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;

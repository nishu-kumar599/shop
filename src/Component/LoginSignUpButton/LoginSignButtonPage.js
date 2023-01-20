import React, { useState } from "react";
import Signup from "../Signup/SignUp";
import Login from "../Login/Login";

const LoginSignButtonPage = () => {
  const [login, setLogin] = useState(false);
  const signupHandle = () => {
    setLogin((change) => !change);
  };
  return (
    <section className="h-full gradient-form  md:h-screen">
      <div className="container mx-auto mobile:w-full  spy-12 px-6 h-full text-center">
        {login ? <Signup /> : <Login />}
        {login ? (
          <h3 className="mt-3 mobile:font-semibold text-center font-bold text-xl">
            Already have account ?
          </h3>
        ) : (
          <h3 className="mt-3 text-center mobile:font-semibold font-bold text-xl">
            Don't have an account yet ?
          </h3>
        )}
        <button
          className=" text-center mt-2 text-cyan-600"
          onClick={signupHandle}
        >
          {login ? " Login " : " Sign Up"}
        </button>
      </div>
    </section>
  );
};
export default LoginSignButtonPage;

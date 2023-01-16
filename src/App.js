import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Pages/Header/Header";
import ProductDetail from "./Pages/SingleProduct/ProductDetail";
import AddToCart from "./Pages/AddToCart/AddToCart";
import SuccessPage from "./Pages/PaymentSuccess/Success";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";

import { useContext } from "react";
import AuthContext from "./Store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AVKRkeOb5dq6WeP-OCa7u-X69KWBvEo-04mYzzRQDycOYeOcPzd_o600AbVfuSEVweEOHMpjGwxjy06Z",
        }}
      >
        <>
          <Header />
          <Routes>
            {!authCtx.userIsLoggedIn ? (
              <Route path="/" element={<LoginPage />} />
            ) : (
              <Route path="/dashboard">
                <Route index element={<Dashboard />} />
              </Route>
            )}

            {!authCtx.userIsLoggedIn ? (
              <Route path="/signUp" element={<SignUpPage />} />
            ) : (
              <Route path="/dashboard">
                <Route index element={<Dashboard />} />
              </Route>
            )}
            {authCtx.userIsLoggedIn && (
              <Route path="/dashboard">
                <Route index element={<Dashboard />} />
              </Route>
            )}
            {authCtx.userIsLoggedIn && (
              <Route path="dashboard/:id" element={<ProductDetail />} />
            )}
            {authCtx.userIsLoggedIn && (
              <Route path="/dashboard/Cart" element={<AddToCart />} />
            )}
            {authCtx.userIsLoggedIn && (
              <Route path="/dashboard/success" element={<SuccessPage />} />
            )}
          </Routes>
        </>
      </PayPalScriptProvider>
    </>
  );
}

export default App;

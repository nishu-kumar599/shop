import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
const PayPal = (product) => {
  const total = product.product.cartTotal;

  const navigate = useNavigate();
  const createOrder = (data, action) => {
    return action.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    navigate({ pathname: "/dashboard/success" }, { replace: false });
    return actions.order.capture();
  };
  return (
    <>
      <div className="row mt-7 text-center">
        <PayPalButtons
          env="sandbox"
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </>
  );
};
export default PayPal;

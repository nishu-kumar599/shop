import { useContext } from "react";
import "../../Component/AddToCart/AddToCart.css";
import CartContext from "../../Store/CartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";

import CartItem from "../Cart/CartItem";
import { useNavigate } from "react-router-dom";
const AddToCartPage = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const navigate = useNavigate();

  const cartItemAdd = (items) => {
    cartCtx.addToCart({
      ...items,
      amount: 1,
    });
  };
  const cartItemRemove = (id) => {
    cartCtx.removeToCart(id);
  };

  const cartItems = (
    <ul className="Product">
      {cartCtx.items.map((item, index) => (
        <CartItem
          key={index}
          title={item.title}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onAdd={cartItemAdd.bind(null, item)}
          onRemove={cartItemRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const createOrder = (data, action) => {
    return action.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: cartCtx.totalAmount,
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
      <section>
        <div className="container">
          <div className="wrapper cart_details ">{cartItems}</div>
        </div>
      </section>
      <section>
        <div className="container  mt-5">
          <div className="wrapper">
            <div className="row justify-content-end total-amount">
              <div className="col-sm-2 text-light bg-dark py-3 rounded-4 text-center align-items-sm-center">
                <h6>
                  TotalAmount:$
                  {totalAmount}
                </h6>
              </div>
            </div>

            <div className="payment_button">
              <div className="row justify-content-center">
                <div className="col-sm-6 mt-5">
                  <PayPalButtons
                    env="sandbox"
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddToCartPage;

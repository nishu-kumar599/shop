import { useContext, useState } from "react";
import "../../Component/AddToCart/AddToCart.css";
import CartContext from "../../Store/CartContext";
import PayPal from "../PayPal/PayPal.js";
import "bootstrap/dist/css/bootstrap.css";
import CartItem from "../Cart/CartItem";
const AddToCartPage = () => {
  const [payment, makePayment] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const product = {
    cartTotal: cartCtx.totalAmount,
  };
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
            {payment ? (
              <div className="payment_button">
                <PayPal className="paypal" product={product} />
              </div>
            ) : (
              <div className="row justify-content-end mt-2">
                <div className="col-sm-3 text-end">
                  <button
                    className="fw-semibold rounded-2 px-3 py-2"
                    onClick={() => makePayment(true)}
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default AddToCartPage;

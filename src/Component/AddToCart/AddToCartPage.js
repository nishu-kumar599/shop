import { useContext, useState } from "react";
import "../../Component/AddToCart/AddToCart.css";
import CartContext from "../../Store/CartContext";
import PayPal from "../PayPal/PayPal.js";
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
      <section className="cartItem">
        <div className="container mx-auto">{cartItems}</div>
      </section>
      <section>
        <div className="container mx-auto mt-10">
          <div className="row flex justify-end ">
            <div className="text-white font-semibold py-5 px-4 bg-black rounded-xl">
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
            <div className="row flex justify-end my-3">
              <div className="py-3 font-semibold px-5 text-white bg-black rounded-xl">
                <button
                  className="fw-semibold "
                  onClick={() => makePayment(true)}
                >
                  CheckOut
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default AddToCartPage;

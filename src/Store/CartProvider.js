import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
const initalState = {
  items: [],
  totalAmount: 0,
};
const CartProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducer, initalState);
  const addItemToCartItem = (items) => {
    dispatch({ type: "ADD_TO_CART", items: items });
    const localItem = JSON.stringify(items);
    localStorage.setItem("item", localItem);
  };
  const removeItemToCartItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addToCart: addItemToCartItem,
    removeToCart: removeItemToCartItem,
  };
  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
export default CartProvider;

import { createContext } from "react";
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addToCart: (items) => {},
  removeToCart: (id) => {},
});
export default CartContext;

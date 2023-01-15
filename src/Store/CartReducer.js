const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateItem;
    if (existingCartItem) {
      const updateExistingItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.items.amount,
      };
      updateItem = [...state.items];
      updateItem[existingCartItemIndex] = updateExistingItem;
    } else {
      updateItem = state.items.concat(action.items);
    }

    const updateAmount =
      state.totalAmount + action.items.price * action.items.amount;
    return {
      items: updateItem,
      totalAmount: updateAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const removeItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const removeItem = state.items[removeItemIndex];
    const newTotalAmount = state.totalAmount - removeItem.price;
    let newItems;
    if (removeItem.amount === 1) {
      newItems = state.items.filter((item) => item.id !== action.id);
      localStorage.removeItem("item", null);
    } else {
      const newItem = {
        ...removeItem,
        amount: removeItem.amount - 1,
      };
      newItems = [...state.items];
      newItems[removeItemIndex] = newItem;
    }
    return {
      ...state,
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }
  return state;
};
export default CartReducer;

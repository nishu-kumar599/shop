import { useRef } from "react";
import Input from "./Input";

const CartForm = (props) => {
  const amountInputRef = useRef();
  const submitHandel = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <form onSubmit={submitHandel}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "Amount",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
            step: "1",
          }}
        />
        <button className=" border-0 mt-4 fw-semibold rounded-2 px-3 py-2">
          Add To Cart
        </button>
      </form>
    </>
  );
};
export default CartForm;

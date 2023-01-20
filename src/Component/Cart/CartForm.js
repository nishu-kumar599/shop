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
        <button className="text-back border-2 rounded-md py-2 px-4 border-black mt-10 font-normal">
          Add To Cart
        </button>
      </form>
    </>
  );
};
export default CartForm;

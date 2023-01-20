import "../../Component/Cart/cart.css";
const CartItem = (props) => {
  return (
    <>
      <div className="container mt-4">
        <div
          className="row-auto font-semibold grid extra:py-8 laptop:grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-4 items-center bg-black text-white rounded-xl gap-4 mt-10 px-4 py-4"
          key={props.id}
        >
          <div className="image">
            <img
              className="h-40 border w-full rounded-md object-cover object-center "
              src={props.image}
              alt={props.title}
            />
          </div>
          <div className="col-sm-3 text-light text-center">
            <h6>Brand:{props.title}</h6>
          </div>
          <div className="col-sm-3 text-light text-center">
            <h6>price:${props.price}</h6>
          </div>
          <div className="col-sm-3 text-light ">
            <div className="flex justify-evenly">
              <div className="col-sm-3 text-center ">
                <span
                  className="text-light border px-3 pt-1 pb-2 rounded-lg cursor-pointer"
                  onClick={props.onAdd}
                >
                  +
                </span>
              </div>
              <div className="col-sm-6 text-center">
                <h6 className="Quantity">Quantity:x{props.amount}</h6>
              </div>
              <div className="col-sm-3 text-center ">
                <span
                  className="text-light border px-3 pt-1 pb-2 rounded-lg cursor-pointer"
                  onClick={props.onRemove}
                >
                  -
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;

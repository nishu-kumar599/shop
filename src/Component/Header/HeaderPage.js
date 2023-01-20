import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";
import AuthContext from "../../Store/AuthContext";

const HeaderPage = () => {
  const addToCart = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const logoutHandle = () => {
    authCtx.logout("token", null);
  };
  const NumberOfItemCart = addToCart.items.reduce((currentValue, items) => {
    return currentValue + items.amount;
  }, 0);
  const navigate = useNavigate();

  const changeProduct = () => {
    navigate({ pathname: "dashboard" }, { replace: false });
  };
  const cartSubmit = () => {
    navigate({ pathname: "dashboard/cart" }, { replace: false });
  };

  const onChangePage = () => {
    if (authCtx.userIsLoggedIn === true) {
      navigate({ pathname: "/dashboard" }, { replace: false });
    }
  };
  const onChangeHandle = () => {
    if (authCtx.userIsLoggedIn === true) {
      navigate({ pathname: "/dashboard" }, { replace: false });
    }
  };

  return (
    <>
      <header>
        <section className="bg-black py-6 ">
          <div className="container justify-between items-center mx-auto flex py-2 ">
            <h1
              className="text-white items-center text-4xl fw-bold inline-flex cursor-pointer"
              onClick={onChangeHandle}
            >
              <AiFillShop />
              Ecom
            </h1>

            {authCtx.userIsLoggedIn && (
              <>
                <div className="laptop:flex desktop:flex tablet:flex small:grid items-center justify-end gap-6 ">
                  <button
                    className="text-white border-2 rounded-md py-1 px-4 "
                    onClick={changeProduct}
                  >
                    Product
                  </button>

                  <button
                    className="text-white border-2 rounded-md py-1 px-4 "
                    onClick={logoutHandle}
                  >
                    Logout
                  </button>

                  <button
                    className="text-white border-2 flex items-center rounded-md py-1 px-4 gap-2 "
                    onClick={cartSubmit}
                  >
                    <FiShoppingCart onClick={onChangePage}></FiShoppingCart>
                    Your cart
                    <span className="bg-white rounded-full font-bold text-black py-1 px-3">
                      {NumberOfItemCart}
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </header>
    </>
  );
};
export default HeaderPage;

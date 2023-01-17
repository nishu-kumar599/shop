import { useNavigate } from "react-router-dom";
import "../../Component/Header/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
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
        <section className=" header-section bg-dark">
          <div className="container py-2">
            <div className="wrapper">
              <div className="row align-items-sm-center header_row">
                <div className="col-sm-7 first_col">
                  <h1
                    className="heading site_logo text-light"
                    onClick={onChangeHandle}
                  >
                    <AiFillShop />
                    Ecom
                  </h1>
                </div>
                {authCtx.userIsLoggedIn && (
                  <div className="col-sm-5 cart_images text-light second_col">
                    <div className="row align-items-sm-center logout">
                      <div className="col-sm-3">
                        <button
                          className="fw-semibold rounded-2 px-3 py-2"
                          onClick={changeProduct}
                        >
                          Product
                        </button>
                      </div>
                      <div className="col-sm-3">
                        <button
                          className="fw-semibold rounded-2 px-3 py-2"
                          onClick={logoutHandle}
                        >
                          Logout
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <div className="box add_to_cart_button">
                          <button
                            className="fw-semibold rounded-2 px-1 py-2"
                            onClick={cartSubmit}
                          >
                            <FiShoppingCart
                              onClick={onChangePage}
                            ></FiShoppingCart>
                            Your cart
                            <span className="bg-black text-light rounded-5 cartTotal">
                              {NumberOfItemCart}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default HeaderPage;

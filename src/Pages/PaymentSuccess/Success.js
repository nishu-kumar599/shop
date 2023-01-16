import { useNavigate } from "react-router-dom";
import { FcOk } from "react-icons/fc";
const SuccessPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate({ pathname: "/dashboard" }, { replace: false });
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-12 text-center mt-3">
              <FcOk size={70} />
              <h3 className=" mt-3">Your order has been placed</h3>
              <button
                className="fw-semibold rounded-2 px-3 py-2 mt-2"
                onClick={handleSubmit}
              >
                Return To Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SuccessPage;

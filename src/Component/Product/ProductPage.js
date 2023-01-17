import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../../Component/Product/Product.css";

const ProductPage = (props) => {
  const navigate = useNavigate();

  const submitHandle = () => {
    navigate({ pathname: `/dashboard/${props.id}` }, { replace: false });
  };
  return (
    <div className="col-sm-4" onClick={submitHandle}>
      <div className=" product-box py-4 px-4" key={props.id}>
        <span>{props.id}</span>
        <img src={props.images} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h6 className="text-light">Price: ${props.price}</h6>
        <button className="border-0 text-black font-weight-bold mt-2 py-1 px-3 text-transform-uppercase rounded-2">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

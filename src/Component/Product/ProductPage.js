import React from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = (props) => {
  const navigate = useNavigate();

  const submitHandle = () => {
    navigate({ pathname: `/dashboard/${props.id}` }, { replace: false });
  };
  return (
    <div className="float-left mt-7" onClick={submitHandle}>
      <div
        className="rounded-lg drop-shadow-xl bg-black py-4 px-10 text-white text-center"
        key={props.id}
      >
        <span className="hidden">{props.id}</span>
        <img
          className="my-4 w-64 object-cover h-48 mx-auto"
          src={props.images}
          alt={props.title}
        />
        <h1 className="my-3 line-clamp-1">{props.title}</h1>
        <p className="line-clamp-1 my-3">{props.description}</p>
        <h6 className="text-light my-3">Price: ${props.price}</h6>
        <button className="text-white my-3 border-2 rounded-md py-1 px-4">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

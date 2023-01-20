import React, { useEffect, useState } from "react";
import classes from "../Product/Product.css";
// import classes from "./Cart.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";
import CartForm from "../Cart/CartForm";
import CartContext from "../../Store/CartContext";
import { useContext, useCallback } from "react";
const ProductDetailPage = () => {
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(0);
  const { id } = useParams();
  const cart = useContext(CartContext);
  const changeImage = (e) => {
    const images = e.target.src;
    if (images) {
      setImage(images);
    }
  };

  const fetchData = useCallback(async () => {
    const data = await axios.get(`https://dummyjson.com/products/${id}`);

    if (data?.data) {
      setProductData(data?.data);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addToCartHandler = (amount) => {
    cart.addToCart({
      id: productData.id,
      amount: amount,
      title: productData.title,
      price: productData.price,
      image: productData.thumbnail,
    });
  };

  return (
    <div className="container mx-auto">
      {productData != null && (
        <>
          <div className="row-auto grid desktop:grid-cols-2 gap-4 mt-10 tablet:grid-cols-2 mobile:grid-cols-2 laptop:grid-cols-2 gap-4  extra:grid-cols-1 ">
            <div className="glassMagnifier">
              <GlassMagnifier
                className={classes.glassMagnifier}
                imageSrc={image !== 0 ? image : productData.thumbnail}
                imageAlt={productData.title}
              />

              <div className="row-auto grid grid-cols-4 gap-4 mt-5 mb-10 ">
                {productData.images.map((img, index) => (
                  <div className="thumbnail" key={index}>
                    <img
                      className={classes.thumbnail}
                      src={img}
                      alt={productData.title}
                      onClick={changeImage}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-sm text-slate-500 font-semibold">
                {productData.brand}/{productData.category}
              </h2>
              <h1 className="text-xl my-2 mb-4 font-bold">
                {productData.title}
              </h1>
              <sup className="text-lg">
                <b>Rating:</b>
                {productData.rating}
              </sup>
              <h5 className="text-lg my-2 ">
                <b>Stock left:</b>
                {productData.stock}
              </h5>
              <h6 className="text-lg my-2">
                <b>Price:</b>${productData.price}
              </h6>

              <span className="text-lg my-2">
                <b>Discount Percentage:</b>${productData.price}
              </span>

              <p className="text-lg my-2">
                <b>Description</b>

                {productData.description}
              </p>

              <CartForm onAddToCart={addToCartHandler} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;

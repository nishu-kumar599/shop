import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
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
    <main>
      <div className="container product_detail mt-4">
        <div className="wrapper">
          {productData != null && (
            <div className="row product_image">
              <div className="col-sm-6 product_big_image">
                <GlassMagnifier
                  imageSrc={image !== 0 ? image : productData.thumbnail}
                  imageAlt={productData.title}
                />

                <div className="row product_thumbnail_images mt-3">
                  {productData.images.map((img, index) => (
                    <div className="col-sm-3 text-center" key={index}>
                      <img
                        src={img}
                        alt={productData.title}
                        onClick={changeImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-6 product_details">
                <h2>
                  {productData.brand}/{productData.category}
                </h2>
                <h1>{productData.title}</h1>
                <sup>
                  <b>Rating:</b>
                  {productData.rating}
                </sup>
                <h5>
                  <b>Stock left:</b>
                  {productData.stock}
                </h5>
                <div className="product-price">
                  <span>
                    <b>Price:</b>${productData.price}
                  </span>
                  <br />
                  <span>
                    <b>Discount Percentage:</b>${productData.price}
                  </span>
                </div>
                <p>
                  <b>Description</b>
                  <br />
                  {productData.description}
                </p>
                <div className="row add_to_cart_section">
                  <div className="col-sm-12 d-flex  ">
                    <CartForm onAddToCart={addToCartHandler} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;

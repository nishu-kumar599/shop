import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "../Product/ProductPage";
import "../../Component/Dashboard/Dashboard.css";
const DashboardPage = () => {
  const [user, setUser] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await axios.get("https://dummyjson.com/products/");

    if (data?.data?.products) {
      setUser(data?.data?.products);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <div className="section">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              {user.map((product, index) => (
                <ProductPage
                  key={index}
                  images={product.thumbnail}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default DashboardPage;

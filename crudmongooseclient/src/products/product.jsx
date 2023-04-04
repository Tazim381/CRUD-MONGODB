import React, { useState, useEffect } from "react";

function Product() {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    await fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log("Tazim", err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {product.map((entry, index) => (
        <div>
          <p>{entry.name}</p>
          <p>{entry.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;

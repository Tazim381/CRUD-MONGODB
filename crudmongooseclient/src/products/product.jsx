import React, { useState, useEffect } from "react";
import "./product.css";

function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const lastIndex = currentPage * entriesPerPage;
  const firstIndex = lastIndex - entriesPerPage;
  const records = product.slice(firstIndex, lastIndex);

  const getProducts = async () => {
    await fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Tazim", err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading........</div>;
  }
  function changeCurrentPage(n) {
    setCurrentPage(currentPage + n);
  }
  function sortAssending() {
    product.sort((a, b) => a.price- b.price);
    setProduct([...product]);
  }
  function sortDescending() {
    product.sort((a, b) => b.price- a.price);
    setProduct([...product]);
  }
  return (
    <div className="data">
      <h1>Product List</h1>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>
            <div className="sortButtons">
              Price
              <button onClick={sortAssending}>sort assending</button>
              <button onClick={sortDescending}>sort descending</button>
            </div>
          </th>
          <th>Quantity</th>
          <th>Unit</th>
        </tr>
        <tbody>
          {records.map((entry, index) => (
            <tr>
              <td>{entry.name}</td>
              <td>{entry.price}</td>
              <td>{entry.quantity}</td>
              <td>{entry.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="nextAndPrevious">
        <button href="#" onClick={() => changeCurrentPage(-1)}>
          PREVIOUS
        </button>
        <button href="#" onClick={() => changeCurrentPage(1)}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Product;

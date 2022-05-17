import React, { useState, useEffect } from "react";
import "./Catalog.css";
import { getProducts } from "../../utils/firebase";
import CatalogAddForm from "./catalogAddForm/CatalogAddForm";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [catalogFormModal, setCatalogFormModal] = useState(true);

  useEffect(() => {
    getProducts().then((response) => setProducts([...response]));
  }, []);
  return (
    <>
      <div className="container">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>{product.brand}</div>
            </li>
          ))}
        </ul>
      </div>
      {catalogFormModal && <CatalogAddForm />}
    </>
  );
};

export default Catalog;

import React from "react";
import "../styles/CardProduto.css";
import productImage from "../assets/shoe-midpage.svg";

export default function ProductCard({ discount, addItem }) {
  return (
    <div className="card-container" onClick={addItem}>
      <div className="image-container">
        <div className="product-image">
          <a href="#">
            <img className="product-img" src={productImage} alt="Produto" />
          </a>
          <div className="discount-info">
            {discount && <span className="discount"> {discount}% OFF</span>}
          </div>
        </div>

        <div className="product-details">
          <p
            style={{ fontSize: "small", fontWeight: "bold", color: "#8f8f8f" }}
          >
            Tênis
          </p>
          <p
            style={{ fontSize: "larger", fontWeight: "400", color: "#474747" }}
          >
            K-Swiss V8 - Masculino
          </p>
          <p
            style={{
              fontSize: "x-large",
              fontWeight: "bold",
            }}
          >
            <span
              style={{ textDecoration: "line-through", color: "lightgrey" }}
            >
              $200
            </span>{" "}
            $100
          </p>
        </div>
      </div>
    </div>
  );
}

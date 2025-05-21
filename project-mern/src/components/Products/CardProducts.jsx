import React from "react";
import Button from "../Button";

const CardProduct = ({ product, deleteProduct, updateProduct }) => {
  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div
      className="card shadow-lg mb-4"
      style={{
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        border: "none",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        color: "#00fff7",
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2
        className="fw-bold mb-3 text-center"
        style={{
          color: "#00fff7",
          textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
          letterSpacing: "2px",
        }}
      >
        {product.name}
      </h2>
      <p>
        <span className="fw-semibold">Descripción:</span> {product.description || "N/A"}
      </p>
      <p>
        <span className="fw-semibold">Precio:</span> ${product.price.toFixed(2)}
      </p>
      <p>
        <span className="fw-semibold">Stock:</span> {product.stock}
      </p>
      <p>
        <span className="fw-semibold">ID:</span> {product._id}
      </p>
      <div className="d-flex justify-content-center mt-3">
        <Button 
          label={"Eliminar"}
          actionButton={() => deleteProduct(product._id)}
          colorClass={"danger"}
        />
        <Button 
          label={"Editar Información"}
          actionButton={() => updateProduct(product)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

export default CardProduct;
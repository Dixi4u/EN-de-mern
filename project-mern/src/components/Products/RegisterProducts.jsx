import React from "react";
import Button from "../Button";

const RegisterProducts = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,

  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <form
        className="mx-auto mb-5"
        style={{
          maxWidth: "600px",
          background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
          border: "none",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#00fff7",
          padding: "2rem",
        }}
        onSubmit={id ? handleUpdate : handleSubmit}
      >
        <h1
          className="fw-bold mb-4 text-center"
          style={{
            color: "#00fff7",
            textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
            letterSpacing: "2px",
          }}
        >
          {id ? "Actualizar Producto" : "Registrar Producto"}
        </h1>
        <div className="row g-3">
          <div className="col-md-12">
            <label className="form-label" htmlFor="name" style={{ color: "#00fff7" }}>
              Nombre
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="description" style={{ color: "#00fff7" }}>
              Descripción
            </label>
            <textarea
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="price" style={{ color: "#00fff7" }}>
              Precio
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="stock" style={{ color: "#00fff7" }}>
              Stock
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              min="0"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn w-100 fw-bold mt-4"
          style={{
            background: "linear-gradient(135deg, #232526 0%, #00fff7 100%)",
            color: "#232526",
            border: "none",
            borderRadius: "1rem",
            boxShadow: "0 4px 16px 0 rgba(0,255,247,0.15)",
            textShadow: "0 0 8px #00fff7",
            letterSpacing: "1px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(0,255,247,0.25)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 16px 0 rgba(0,255,247,0.15)";
          }}
        >
          {id ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </>
  );
};

export default RegisterProducts;
import React, { useEffect } from "react";
import RegisterProducts from "../components/Products/RegisterProducts";
import ListProducts from "../components/Products/ListProducts";
import { Toaster } from "react-hot-toast";
import useDataProducts from "../components/Products/hooks/useDataProducts";

const Products = () => {
  useEffect(() => {
    document.title = "Productos";
  }, []);

  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    errorProduct,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    products,
    setProducts,
    cleanData,
    handleSubmit,
    fetchData,
    deleteProduct,
    updateProduct,
    handleUpdate,
  } = useDataProducts();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(120deg, #232526 0%, #0f2027 100%)",
        padding: "40px 0",
      }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "900px",
        }}
      >
        <div
          className="shadow-lg"
          style={{
            background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
            border: "none",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            color: "#00fff7",
            padding: "2rem",
          }}
        >
          <h1
            className="fw-bold mb-4 text-center"
            style={{
              color: "#00fff7",
              textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
              letterSpacing: "2px",
            }}
          >
            Productos
          </h1>
          <div className="d-flex border-bottom mb-4" style={{ borderColor: "#00fff7" }}>
            <button
              className={`btn me-2 fw-bold ${activeTab === "list" ? "" : ""}`}
              style={{
                color: activeTab === "list" ? "#00fff7" : "#b0b0b0",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === "list" ? "2px solid #00fff7" : "none",
                borderRadius: 0,
                letterSpacing: "1px",
              }}
              onClick={() => setActiveTab("list")}
            >
              Lista de productos
            </button>
            <button
              className={`btn fw-bold ${activeTab === "form" ? "" : ""}`}
              style={{
                color: activeTab === "form" ? "#00fff7" : "#b0b0b0",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === "form" ? "2px solid #00fff7" : "none",
                borderRadius: 0,
                letterSpacing: "1px",
              }}
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar Productos
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListProducts
                  setId={setId}
                  setActiveTab={setActiveTab}
                  updateProduct={updateProduct}
                  handleUpdate={handleUpdate}
                  deleteProduct={deleteProduct}
                  products={products}
                  loading={loading}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterProducts
                  id={id}
                  setId={setId}
                  name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  price={price}
                  setPrice={setPrice}
                  stock={stock}
                  setStock={setStock}
                  errorProduct={errorProduct}
                  setError={setError}
                  success={success}
                  setSuccess={setSuccess}
                  loading={loading}
                  setLoading={setLoading}
                  products={products}
                  setProducts={setProducts}
                  cleanData={cleanData}
                  handleSubmit={handleSubmit}
                  handleUpdate={handleUpdate}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
      />
    </div>
  );
};

export default Products;
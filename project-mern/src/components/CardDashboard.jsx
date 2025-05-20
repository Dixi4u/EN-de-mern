import React from "react";

const CardDashboard = ({ label, data }) => {
  let className = "";
  if (label === "Empleados") {
    className =
      "bg-blue-500 hover:bg-blue-700 text-white p-6 rounded-lg shadow-md";
  } else if (label === "Marcas") {
    className =
      "bg-green-500 hover:bg-green-700 text-white p-6 rounded-lg shadow-md";
  } else if (label === "Modelos") {
    className =
      "bg-purple-500 hover:bg-purple-700 text-white p-6 rounded-lg shadow-md";
  } else if (label === "Categorias") {
    className =
      "bg-yellow-500 hover:bg-yellow-700 text-white p-6 rounded-lg shadow-md";
  } else if (label === "Productos") {
    className =
      "bg-red-500 hover:bg-red-700 text-white p-6 rounded-lg shadow-md";
  } else
    className =
      "bg-gray-500 hover:bg-gray-700 text-white p-6 rounded-lg shadow-md";

  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        color: "#00fff7",
        border: "none",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderLeft: "1px solid rgba(255,255,255,0.1)",
        transition: "transform 0.2s",
        textAlign: "center",
      }}
      onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2 className="text-xl fw-bold mb-2" style={{ letterSpacing: "2px" }}>{label}</h2>
      <p className="display-6 fw-bold mt-4" style={{ textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7" }}>{data}</p>
    </div>
  );
};
export default CardDashboard;

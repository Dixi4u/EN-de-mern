import React from "react";
import Button from "../Button";

const CardBlog = ({ blog, deleteBlog, updateBlog }) => {
  if (!blog) {
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
        {blog.title}
      </h2>
      {blog.image && (
        <div className="text-center mb-3">
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              borderRadius: "1rem",
              boxShadow: "0 2px 8px 0 rgba(0,255,247,0.15)",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <p>
        <span className="fw-semibold">Contenido:</span> {blog.content}
      </p>
      <p>
        <span className="fw-semibold">ID:</span> {blog._id}
      </p>
      <div className="d-flex justify-content-center mt-3">
        <Button
          label={"Eliminar"}
          actionButton={() => deleteBlog(blog._id)}
          colorClass={"danger"}
        />
        <Button
          label={"Editar Información"}
          actionButton={() => updateBlog(blog)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

export default CardBlog;
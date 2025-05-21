import React from "react";

const RegisterBlogs = ({
  id,
  title,
  setTitle,
  content,
  setContent,
  image,
  setImage,
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
        encType="multipart/form-data"
      >
        <h1
          className="fw-bold mb-4 text-center"
          style={{
            color: "#00fff7",
            textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
            letterSpacing: "2px",
          }}
        >
          {id ? "Actualizar Blog" : "Registrar Blog"}
        </h1>
        <div className="row g-3">
          <div className="col-md-12">
            <label className="form-label" htmlFor="title" style={{ color: "#00fff7" }}>
              Título
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="content" style={{ color: "#00fff7" }}>
              Contenido
            </label>
            <textarea
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              rows={5}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="image" style={{ color: "#00fff7" }}>
              Imagen
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="image"
              type="file"
              accept="image/*"
              onChange={e => setImage(e.target.files[0])}
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
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(0,255,247,0.25)";
          }}
          onMouseOut={e => {
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

export default RegisterBlogs;
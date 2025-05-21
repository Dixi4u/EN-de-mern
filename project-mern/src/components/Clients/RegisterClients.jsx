import React from "react";

const RegisterClients = ({
  id,
  name,
  setName,
  lastName,
  setLastName,
  birthday,
  setBirthday,
  email,
  setEmail,
  password,
  setPassword,
  telephone,
  setTelephone,
  dui,
  setDui,
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
          {id ? "Actualizar Cliente" : "Registrar Cliente"}
        </h1>
        <div className="row g-3">
          <div className="col-md-6">
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
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="lastName" style={{ color: "#00fff7" }}>
              Apellido
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="lastName"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="email" style={{ color: "#00fff7" }}>
              Email
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="password" style={{ color: "#00fff7" }}>
              Contraseña
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required={!id}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="telephone" style={{ color: "#00fff7" }}>
              Teléfono
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="telephone"
              type="text"
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="dui" style={{ color: "#00fff7" }}>
              DUI
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="dui"
              type="text"
              value={dui}
              onChange={e => setDui(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="birthday" style={{ color: "#00fff7" }}>
              Fecha de nacimiento
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
              id="birthday"
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
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

export default RegisterClients;
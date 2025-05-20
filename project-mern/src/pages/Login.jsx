import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Credenciales incorrectas.");
      }

      const data = await response.json();
      toast.success("Inicio de sesión exitoso");
      localStorage.setItem("authToken", data.token); // Guardar el token en localStorage
      document.cookie = `authToken=${data.token}; path=/; max-age=86400;`; // Guarda también como cookie
      navigate("/dashboard");
    } catch (error) {
      toast.error("Error al iniciar sesión: " + error.message);
    }
  };

  useEffect(() => {
    const miCookie = localStorage.getItem("authToken");
    console.log(miCookie, "cookie desde el login useEffect");
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(120deg, #232526 0%, #0f2027 100%)",
        minHeight: "100vh",
      }}
    >
      <Toaster position="top-center" />
      <div
        className="card shadow-lg p-4"
        style={{
          width: "24rem",
          background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
          border: "none",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#00fff7",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#00fff7",
            textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
            letterSpacing: "2px",
          }}
        >
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: "#00fff7" }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: "#00fff7" }}>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                background: "rgba(35,37,38,0.8)",
                color: "#00fff7",
                border: "1px solid #00fff7",
                borderRadius: "0.75rem",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100 fw-bold"
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
            Iniciar Sesión
          </button>
        </form>
        <div className="text-center mt-3">
          <small style={{ color: "#00fff7" }}>
            ¿No tienes una cuenta? <a href="/register" style={{ color: "#00fff7", textDecoration: "underline" }}>Regístrate aquí</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;

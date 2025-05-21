import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout, authCokie } = useAuth();
 
    const isActive = (path) => {
        return location.pathname.includes(path);
    };
 
    const handleLogout = async () => {
        await fetch('http://localhost:4000/api/logout', {
            method: 'POST',
            credentials: 'include'
        });
        logout();
        navigate('/');
    };
 
  // Si no hay sesión, no mostrar el NavBar
  if (!authCokie) return null;

  return (
    <nav
      className="shadow"
      style={{
        background: "linear-gradient(120deg, #232526 0%, #0f2027 100%)",
        borderBottom: "1px solid #00fff7",
        boxShadow: "0 2px 16px 0 rgba(0,255,247,0.08)",
      }}
    >
      <div className="container mx-auto px-4 py-3 d-flex justify-content-between align-items-center">
        <div
          className="fs-4 fw-bold"
          style={{ color: "#00fff7", textShadow: "0 0 8px #00fff7" }}
        >
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-decoration-none fw-bold" : "text-decoration-none"
            }
            style={({ isActive }) => ({
              color: isActive ? "#00fff7" : "#b0b0b0",
              textShadow: isActive ? "0 0 10px #00fff7" : "none",
              letterSpacing: "2px",
            })}
          >
            ByteShop
          </NavLink>
        </div>
        <ul className="d-flex gap-4 mb-0" style={{ listStyle: "none" }}>
          <li>
            <NavLink
              to="/blogs"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#00fff7" : "#b0b0b0",
                fontWeight: isActive ? "bold" : "normal",
                textShadow: isActive ? "0 0 8px #00fff7" : "none",
                transition: "color 0.2s",
                letterSpacing: "1px",
              })}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#00fff7" : "#b0b0b0",
                fontWeight: isActive ? "bold" : "normal",
                textShadow: isActive ? "0 0 8px #00fff7" : "none",
                transition: "color 0.2s",
                letterSpacing: "1px",
              })}
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#00fff7" : "#b0b0b0",
                fontWeight: isActive ? "bold" : "normal",
                textShadow: isActive ? "0 0 8px #00fff7" : "none",
                transition: "color 0.2s",
                letterSpacing: "1px",
              })}
            >
              Empleados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#00fff7" : "#b0b0b0",
                fontWeight: isActive ? "bold" : "normal",
                textShadow: isActive ? "0 0 8px #00fff7" : "none",
                transition: "color 0.2s",
                letterSpacing: "1px",
              })}
            >
              Categorías
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            onClick={handleLogout}
            className="fw-bold"
            style={{
              background: "linear-gradient(135deg, #232526 0%, #00fff7 100%)",
              color: "#232526",
              border: "none",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px 0 rgba(0,255,247,0.15)",
              textShadow: "0 0 8px #00fff7",
              letterSpacing: "1px",
              padding: "0.5rem 2rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer"
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
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

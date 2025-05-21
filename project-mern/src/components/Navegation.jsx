import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Clients from "../pages/Clients";
import Blogs from "../pages/Blogs";
//import Categories from "../pages/Categories";
import { PrivateRoute } from "./PrivateRoute";

import { useAuth } from "../context/AuthContext";

function Navegation() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const authRoutes = ['/login', '/register', '/recuperacion', '/recuperacioncodigo', '/cambiarpassword'];

  const { authCokie } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');
    const shouldHideNavbar = authRoutes.some(route => 
      currentPath === route || currentPath.startsWith(route + '/')
    );
    const shouldHideFooter = authRoutes.some(route => 
      currentPath === route || currentPath.startsWith(route + '/')
    );
    setShowNavbar(!shouldHideNavbar);
    setShowFooter(!shouldHideFooter);
  }, [location.pathname]);



  useEffect(() => {
    const publicRoutes = ['/login', '/register', '/recuperacion', '/recuperacioncodigo', '/cambiarpassword'];
    const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');
    if (authCokie && publicRoutes.includes(currentPath)) {
      navigate("/employees");
    }
  }, [authCokie, navigate, location.pathname]);

  return (
    <>
      {showNavbar && authCokie && <NavBar />}
      <Routes>
        <Route path="/" element={authCokie ? <Navigate to="/dashboard" /> : <Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </>
  );
}
export default Navegation;

import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";


import Navegation from "./components/Navegation";


import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navegation />
      </Router>
    </AuthProvider>
  );
}

export default App

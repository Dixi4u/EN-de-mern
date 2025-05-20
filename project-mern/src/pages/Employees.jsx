import React, { useState, useEffect } from "react";
import RegisterEmployees from "../components/Employees/RegisterEmployees";
import ListEmployees from "../components/Employees/ListEmployees";
import {Toaster} from 'react-hot-toast';

import useDataEmployees from "../components/Employees/hooks/useDataEmployees";

const Employees = () => {

  /*Efecto para cambiar el título de la página
  cuando se carga la página*/
    useEffect(() => {
    document.title = 'Empleados';
  }, []);

  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    address,
    setAddress,
    birthdate,
    setBirthdate,
    hireDate,
    setHireDate,
    isssNumber,
    setIsssNumber,
    errorEmpleado,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
  } = useDataEmployees();

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
            Empleados
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
              Lista de empleados
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
              Gestionar Empleados
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListEmployees
                  setId={setId}
                  setActiveTab={setActiveTab}
                  updateEmployee={updateEmployee}
                  handleUpdate={handleUpdate}
                  deleteEmployee={deleteEmployee}
                  employees={employees}
                  loading={loading}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterEmployees
                  id={id}
                  setId={setId}
                  name={name}
                  setName={setName}
                  lastName={lastName}
                  setLastName={setLastName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  telephone={telephone}
                  setTelephone={setTelephone}
                  dui={dui}
                  setDui={setDui}
                  address={address}
                  setAddress={setAddress}
                  birthdate={birthdate}
                  setBirthdate={setBirthdate}
                  hireDate={hireDate}
                  setHireDate={setHireDate}
                  isssNumber={isssNumber}
                  setIsssNumber={setIsssNumber}
                  errorEmpleado={errorEmpleado}
                  setError={setError}
                  success={success}
                  setSuccess={setSuccess}
                  loading={loading}
                  setLoading={setLoading}
                  employees={employees}
                  setEmployees={setEmployees}
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

export default Employees;

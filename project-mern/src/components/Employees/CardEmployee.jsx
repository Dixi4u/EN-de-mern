import React from "react";
import Button from "../Button";

const CardEmployee = ({ employee, deleteEmployee, updateEmployee }) => {
  if (!employee) {
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
        {employee.name} {employee.lastName}
      </h2>
      <p>
        <span className="fw-semibold">Email:</span> {employee.email}
      </p>
      <p>
        <span className="fw-semibold">Telephone:</span> {employee.telephone}
      </p>
      <p>
        <span className="fw-semibold">DUI:</span> {employee.dui}
      </p>
      <p>
        <span className="fw-semibold">Address:</span> {employee.address}
      </p>
      <p>
        <span className="fw-semibold">Birthdate:</span>{" "}
        {new Date(employee.birthdate).toLocaleDateString()}
      </p>
      <p>
        <span className="fw-semibold">Hire Date:</span>{" "}
        {new Date(employee.hireDate).toLocaleDateString()}
      </p>
      <p>
        <span className="fw-semibold">ISSS Number:</span> {employee.isssNumber}
      </p>
      <p>
        <span className="fw-semibold">ID:</span> {employee._id}
      </p>
      <div className="d-flex justify-content-center mt-3">
        <Button 
          label={"Eliminar"}
          actionButton={() => deleteEmployee(employee._id)}
          colorClass={"danger"}
        />
        <Button 
          label={"Editar Información"}
          actionButton={() => updateEmployee(employee)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

export default CardEmployee;

import React, { useEffect } from "react";
import RegisterClients from "../components/Clients/RegisterClients";
import ListClients from "../components/Clients/ListClients";
import { Toaster } from "react-hot-toast";
import useDataClients from "../components/Clients/hooks/useDataClients";

const Clients = () => {
  useEffect(() => {
    document.title = "Clientes";
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
    isVerified,
    setIsVerified,
    errorClient,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    clients,
    setClients,
    cleanData,
    handleSubmit,
    fetchData,
    deleteClient,
    updateClient,
    handleUpdate,
  } = useDataClients();

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
            Clientes
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
              Lista de clientes
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
              Gestionar Clientes
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListClients
                  setId={setId}
                  setActiveTab={setActiveTab}
                  updateClient={updateClient}
                  handleUpdate={handleUpdate}
                  deleteClient={deleteClient}
                  clients={clients}
                  loading={loading}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterClients
                  id={id}
                  setId={setId}
                  name={name}
                  setName={setName}
                  lastName={lastName}
                  setLastName={setLastName}
                  birthday={birthday}
                  setBirthday={setBirthday}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  telephone={telephone}
                  setTelephone={setTelephone}
                  dui={dui}
                  setDui={setDui}
                  isVerified={isVerified}
                  setIsVerified={setIsVerified}
                  errorClient={errorClient}
                  setError={setError}
                  success={success}
                  setSuccess={setSuccess}
                  loading={loading}
                  setLoading={setLoading}
                  clients={clients}
                  setClients={setClients}
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

export default Clients;
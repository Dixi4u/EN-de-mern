import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ApiRegister = "http://localhost:4000/api/registerClients";
const ApiClients = "http://localhost:4000/api/clients";

const useDataClients = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [errorClient, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);

  const cleanData = () => {
    setName("");
    setLastName("");
    setBirthday("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setIsVerified(false);
    setId("");
  };

  // Registrar cliente
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !lastName ||
      !birthday ||
      !email ||
      !password ||
      !telephone ||
      !dui
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newClient = {
        name,
        lastName,
        birthday,
        email,
        password,
        telephone,
        dui,
        isVerified,
      };

      const response = await fetch(ApiRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClient),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el cliente");
      }

      toast.success("Cliente registrado");
      setSuccess("Cliente registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Ocurrió un error al registrar el cliente");
    } finally {
      setLoading(false);
    }
  };

  // Obtener clientes
  const fetchData = async () => {
    try {
      const response = await fetch(ApiClients);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Eliminar cliente
  const deleteClient = async (id) => {
    try {
      const response = await fetch(`${ApiClients}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete client");
      }

      toast.success("Cliente eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  // Cargar datos para editar
  const updateClient = (dataClient) => {
    setId(dataClient._id);
    setName(dataClient.name);
    setLastName(dataClient.lastName);
    setBirthday(dataClient.birthday);
    setEmail(dataClient.email);
    setTelephone(dataClient.telephone);
    setDui(dataClient.dui);
    setIsVerified(dataClient.isVerified);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  // Actualizar cliente
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedClient = {
        name,
        lastName,
        birthday,
        email,
        password,
        telephone,
        dui,
        isVerified,
      };

      const response = await fetch(`${ApiClients}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedClient),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el cliente");
      }

      toast.success("Cliente actualizado");
      setSuccess("Cliente actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el cliente");
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};

export default useDataClients;
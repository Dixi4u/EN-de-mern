import React from "react";
import CardClient from "../Clients/CardClient";

const ListClients = ({
  deleteClient,
  updateClient,
  loading,
  clients,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de clientes
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {clients?.map((client) => (
          <CardClient
            key={client._id}
            client={client}
            deleteClient={deleteClient}
            updateClient={updateClient}
          />
        ))}
      </div>
    </>
  );
};

export default ListClients;
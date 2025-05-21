import React, { useEffect, useState } from "react";
import CardDashboard from "../components/CardDashboard";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

  const { authCokie } = useAuth();

  const [data, setData] = useState({
    employees: 0,
    clients: 0,
    blogs: 0/*,
    categories: 0,
    products: 0,*/
  });

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${authCokie}`,
      };

      const employeesResponse = await fetch("http://localhost:4000/api/employees", { headers });
      const clientsResponse = await fetch("http://localhost:4000/api/clients", { headers });
      const blogsResponse = await fetch("http://localhost:4000/api/blog", { headers });
      /*const categoriesResponse = await fetch("http://localhost:4000/api/categories", { headers });*/

      if (!employeesResponse.ok) throw new Error(`Employees API error: ${employeesResponse.status}`);
      if (!clientsResponse.ok) throw new Error(`Clients API error: ${clientsResponse.status}`);
      if (!blogsResponse.ok) throw new Error(`Models API error: ${blogsResponse.status}`);
      //if (!categoriesResponse.ok) throw new Error(`Categories API error: ${categoriesResponse.status}`);

      const employeesData = await employeesResponse.json();
      const clientsData = await clientsResponse.json();
      const blogsData = await blogsResponse.json();
      /*const categoriesData = await categoriesResponse.json();
*/
      setData({
        employees: employeesData.length,
        clients: clientsData.length,
        blogs: blogsData.length,
        /*categories: categoriesData.length,*/
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(120deg, #232526 0%, #0f2027 100%)",
        padding: "40px 0",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{
              color: "#00fff7",
              textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
              letterSpacing: "3px",
            }}
          >
            Dashboard
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard label="Empleados" data={data.employees} icon="👨‍💼" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard label="Clientes" data={data.clients} icon="🏷️" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard label="Blogs" data={data.blogs} icon="🚗" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard label="Categorias" data={data.categories} icon="📦" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

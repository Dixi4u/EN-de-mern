import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const useDataProducts = () => {
  const ApiRegister = "http://localhost:4000/api/products";
  const ApiProducts = "http://localhost:4000/api/products";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [errorProduct, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const cleanData = () => {
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      setError("Todos los campos obligatorios deben ser completados");
      toast.error("Todos los campos obligatorios deben ser completados");
      return;
    }

    try {
      const newProduct = {
        name,
        description,
        price,
        stock,
      };

      const response = await fetch(ApiRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el producto");
      }

      const data = await response.json();
      toast.success("Producto registrado");
      setProducts(data);
      setSuccess("Producto registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      toast.error("Ocurrió un error al registrar el producto");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(ApiProducts);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const result = await response.json();
      toast.success("Producto eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateProduct = async (dataProduct) => {
    setId(dataProduct._id);
    setName(dataProduct.name);
    setDescription(dataProduct.description);
    setPrice(dataProduct.price);
    setStock(dataProduct.stock);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = {
        name,
        description,
        price,
        stock,
      };

      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      toast.success("Producto actualizado");
      setSuccess("Producto actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
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
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    errorProduct,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    products,
    setProducts,
    cleanData,
    handleSubmit,
    fetchData,
    deleteProduct,
    updateProduct,
    handleUpdate,
  };
};

export default useDataProducts;
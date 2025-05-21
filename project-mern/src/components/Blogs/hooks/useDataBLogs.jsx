import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ApiRegister = "http://localhost:4000/api/blog";
const ApiBlogs = "http://localhost:4000/api/blog";

const useDataBlogs = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [errorBlog, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const cleanData = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setId("");
  };

  // Registrar blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const response = await fetch(ApiRegister, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el blog");
      }

      toast.success("Blog registrado");
      setSuccess("Blog registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Ocurrió un error al registrar el blog");
    } finally {
      setLoading(false);
    }
  };

  // Obtener blogs
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(ApiBlogs);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Eliminar blog
  const deleteBlog = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${ApiBlogs}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      toast.success("Blog eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos para editar
  const updateBlog = (dataBlog) => {
    setId(dataBlog._id);
    setTitle(dataBlog.title);
    setContent(dataBlog.content);
    setImage(null); // No se carga la imagen existente, solo se puede subir una nueva
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  // Actualizar blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const response = await fetch(`http://localhost:4000/api/blog/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el blog");
      }

      toast.success("Blog actualizado");
      setSuccess("Blog actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el blog");
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
    title,
    setTitle,
    content,
    setContent,
    image,
    setImage,
    errorBlog,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    blogs,
    setBlogs,
    cleanData,
    handleSubmit,
    fetchData,
    deleteBlog,
    updateBlog,
    handleUpdate,
  };
};

export default useDataBlogs;
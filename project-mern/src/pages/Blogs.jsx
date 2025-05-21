import React, { useEffect } from "react";
import RegisterBlogs from "../components/Blogs/RegisterBlogs";
import ListBlogs from "../components/Blogs/ListBlogs";
import { Toaster } from "react-hot-toast";
import useDataBlogs from "../components/Blogs/hooks/useDataBLogs";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs";
  }, []);

  const {
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
  } = useDataBlogs();

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
            Blogs
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
              Lista de blogs
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
              Gestionar Blogs
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListBlogs
                  setId={setId}
                  setActiveTab={setActiveTab}
                  updateBlog={updateBlog}
                  handleUpdate={handleUpdate}
                  deleteBlog={deleteBlog}
                  blogs={blogs}
                  loading={loading}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterBlogs
                  id={id}
                  setId={setId}
                  title={title}
                  setTitle={setTitle}
                  content={content}
                  setContent={setContent}
                  image={image}
                  setImage={setImage}
                  errorBlog={errorBlog}
                  setError={setError}
                  success={success}
                  setSuccess={setSuccess}
                  loading={loading}
                  setLoading={setLoading}
                  blogs={blogs}
                  setBlogs={setBlogs}
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

export default Blogs;
import React from "react";
import CardBlog from "./CardBlog";

const ListBlogs = ({
  deleteBlog,
  updateBlog,
  loading,
  blogs,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de blogs
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {blogs?.map((blog) => (
          <CardBlog
            key={blog._id}
            blog={blog}
            deleteBlog={deleteBlog}
            updateBlog={updateBlog}
          />
        ))}
      </div>
    </>
  );
};

export default ListBlogs;
import React from "react";

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Hooks Explained",
      author: "Sasi Kanth",
    },
    {
      id: 2,
      title: "Modern CSS Tricks",
      author: "John Smith",
    },
  ];

  return (
    <div className="card">
      <h2>📝 Blog Details</h2>

      {blogs.map((blog) => (
        <div className="item" key={blog.id}>
          <h3>{blog.title}</h3>
          <p><strong>Author:</strong> {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
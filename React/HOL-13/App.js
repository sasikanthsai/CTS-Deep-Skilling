import React, { useState } from "react";
import "./App.css";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("books");

  return (
    <div className="App">

      <h1>📖 Blogger Dashboard</h1>
      <p className="subtitle">
        React Conditional Rendering Demo
      </p>

      <div className="buttons">
        <button onClick={() => setView("books")}>Books</button>
        <button onClick={() => setView("blogs")}>Blogs</button>
        <button onClick={() => setView("courses")}>Courses</button>
      </div>

      {view === "books" && <BookDetails />}
      {view === "blogs" && <BlogDetails />}
      {view === "courses" && <CourseDetails />}

    </div>
  );
}

export default App;
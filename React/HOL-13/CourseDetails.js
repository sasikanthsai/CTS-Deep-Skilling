import React from "react";

function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "React Development",
      duration: "8 Weeks",
    },
    {
      id: 2,
      name: "Python Full Stack",
      duration: "12 Weeks",
    },
  ];

  return (
    <div className="card">
      <h2>🎓 Course Details</h2>

      {courses.map((course) => (
        <div className="item" key={course.id}>
          <h3>{course.name}</h3>
          <p><strong>Duration:</strong> {course.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
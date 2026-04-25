// App.jsx
import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const students = [
    {
      name: "سارة محمد",
      age: 22,
      major: "هندسة",
      university: "جامعة ماكغيل",
    },
    {
      name: "يوسف خالد",
      age: 19,
      major: "إدارة أعمال",
      university: "جامعة كيبك",
    },
    {
      name: "ليلى حسن",
      age: 21,
      major: "طب",
      university: "جامعة لافال",
    },
  ];

  return (
    <div>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          major={student.major}
          university={student.university}
        />
      ))}
      
    </div>
  );
}

export default App;
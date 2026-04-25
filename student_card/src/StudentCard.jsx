// StudentCard.jsx
import React from "react";

const StudentCard = ({ name, age, major, university }) => {
  return (
    <div >
      <h3>اسم الطالب: {name}</h3>
      <p>العمر: {age}</p>
      <p>التخصص: {major}</p>
      <p>الجامعة: {university}</p>
    </div>
  );
};


export default StudentCard;
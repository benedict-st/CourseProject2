import React from "react";

export default function Qualitie(props) {
  const getqualitiesItemClasses = (color) => {
    let classes = "badge m-2 bg-";
    classes += color;
    return classes;
  };

  return (
    <>
      {props.qualities.map((q) => (
        <span key={q._id} className={getqualitiesItemClasses(q.color)}>
          {q.name}
        </span>
      ))}
    </>
  );
}

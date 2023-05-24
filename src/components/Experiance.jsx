import React from "react";
import data from "../assets/data.json";

const Experiance = () => {
  return (
    <div id="timeline">
      <div className="timeBox">
        {data.projects.map((item, index) => (
          <ExperItems
            heading={item.title}
            text={item.date}
            index={item.index}
          />
        ))}
      </div>
    </div>
  );
};

const ExperItems = ({ heading, text, index }) => (
  <div
    className={`expItems ${
      index % 2 === 0 ? "lefttimelines" : "righttimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Experiance;

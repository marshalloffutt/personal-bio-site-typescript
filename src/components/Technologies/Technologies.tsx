import React, { useEffect, useState } from "react";
import { TechnologyDetails } from "../../lib/interfaces";
import "./Technologies.scss";

export default function Technologies() {
  const [data, setData] = useState([]);

  const getTechnologies = () => {
    fetch("db/technologies.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.technologies);
      });
  };

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <div className="technologies" id="Technologies">
      <h1>Technologies</h1>
      <div className="technologies-container">
        {data &&
          data.length > 0 &&
          data.map((technology: TechnologyDetails) => (
            <div
              className="dev-icon"
              key={technology.id}
              title={technology.name}
            >
              <i className={technology.class}></i>
            </div>
          ))}
      </div>
    </div>
  );
}

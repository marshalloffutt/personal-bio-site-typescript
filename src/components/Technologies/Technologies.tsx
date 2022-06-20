import React, { useEffect, useState } from "react";
import "./Technologies.scss";

export default function Technologies() {
  const [data, setData] = useState([]);

  type technology = {
    id: number;
    name: string;
    class: string;
  };

  const getTechnologies = () => {
    fetch("data/technologies.json", {
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
    <div>
      {data &&
        data.length > 0 &&
        data.map((technology: technology) => (
          <p key={technology.id}>{technology.name}</p>
        ))}
    </div>
  );
}

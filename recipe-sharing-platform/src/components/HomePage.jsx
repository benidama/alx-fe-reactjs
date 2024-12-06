import React from "react";
import { useState, useEffect } from "react";
import { react } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState("");
  const newData = data.json.map((data) => {
    data.title;
  });
  const result = [useParams, ingredients, instructions, image, Link, to];
  return (
    <div className="shadow-sm text-sm hover:before rounded-md grid grid-cols-1,grid-cols-2,grid-cols-3">
      {newData}
      {result}
    </div>
  );
};

export default HomePage;

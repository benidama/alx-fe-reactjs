import React from "react";

import { useState, useEffect } from "react";

function RecipeDetail() {
  const [data, setData] = useState();
  const myData = data.json.map((data) => {
    data.title;
  });
  const result = [useParams, ingredients, instructions, image, Link, to];
  return (
    <div className="text-sm shadow-sm font-bold">
      {myData}
      {result}
    </div>
  );
}

export default RecipeDetail;

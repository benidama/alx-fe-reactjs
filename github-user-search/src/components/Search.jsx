import React, { useState } from "react";

function github(event) {
  event.preventDefault;
  document.getElementById("name").target.value;
}
const Search = () => {
  const [form, setForm] = useState("good");
  return (
    <div>
      <form action="">
        <label htmlFor="">Enter your name</label>
        <input type="text" placeholder="your name" />
        <label htmlFor="email">{form}</label>
        <button onSubmit={github}>Submit</button>
      </form>
    </div>
  );
};

export default Search;

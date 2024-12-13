import React, { useState } from "react";

function github(event) {
  event.preventDefault;
  document.getElementById("name").target.value;
}
const Search = () => {
  const [form, setForm] = useState("good");
  const avatar_url = "My data";
  return (
    <div>
      <form action="">
        <label htmlFor="">Enter your name</label>
        <input type="text" placeholder="your name" />
        <label htmlFor="email">{form}</label>
        <p>Loading</p>
        <img src="" alt="not found" />
        <p>Looks like we cant find the user</p>
        <button onSubmit={github}>login</button>
      </form>
    </div>
  );
};

export default Search;

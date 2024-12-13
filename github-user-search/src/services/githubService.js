import React from "react";
import axios from "axios";

const file = axios.create("https://api.github.com/users/{username}");
async function fetchUserData() {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}
let date = get;
const githubService = () => {
  return (
    <div>
      <p id="demo"></p>
      <fetchUserData />
    </div>
  );
};

export default githubService;

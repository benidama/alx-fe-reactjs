import React from "react";
import axios from "axios";

const file = axios.create("https://api.github.com/users/{username}");
const query = "https://api.github.com/search/users?q={query}";
async function fetchUserData() {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}

let location = get;
function minRepos() {
  return location;
}

const githubService = () => {
  return (
    <div>
      <p id="demo"></p>
      <fetchUserData />
    </div>
  );
};

export default githubService;

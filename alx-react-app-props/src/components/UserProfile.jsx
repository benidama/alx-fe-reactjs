import React, { useContext } from "react";
import { userDataContext } from "./components/UserContext.js";
import { UserContext } from "./components/UserContext.js";
const UserProfile = (props) => {
  return (
    <div>
      <div
        style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}
      >
        <h2 style={{ color: "blue" }}>{props.name}</h2>
        <p>
          Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
        </p>
        <p>Bio: {props.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;

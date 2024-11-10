import React, { useContext } from "react";
import { userDataContext } from "./UserContext.js";
import { UserContext } from ".UserContext.js";

const UserProfile = (props) => {
  const userData = useContext(userDataContext);
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

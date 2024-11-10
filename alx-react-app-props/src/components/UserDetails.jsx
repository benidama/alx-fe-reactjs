import React, { useContext } from "react";
import { UserContext } from "./components/UserContext.js";

function UserDetails() {
  const userData = useContext(userDataContext);
  return (
    <div>
      <h3>UserDetails</h3>
      <h4>{userData}</h4>
    </div>
  );
}

export default UserDetails;

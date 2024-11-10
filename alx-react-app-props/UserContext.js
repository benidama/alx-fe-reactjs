import React, { useState, createContext } from "react";
export const UserDataContext = createContext();
import React from "react";
import UserProfile from "./src/ProfilePage";

const [userData, setUserData] = useState({
  name: "Jane Doe",
  email: "jane.doe@example.com",
});
function UserContext() {
  return (
    <div>
      <UserDataContext.Provider value={userData}>
        <UserProfile />
      </UserDataContext.Provider>
    </div>
  );
}

export default UserContext;

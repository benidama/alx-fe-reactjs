import React from "react";
import ProfilePage from "./src/ProfilePage";

const UserContext = () => {
  const DataContext = React.createContext();
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default UserContext;

import UserContext from "../UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <ProfilePage userData={userData} />
      <UserContext userData={userData} />
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;

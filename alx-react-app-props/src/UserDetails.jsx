import { UserContext } from "../UserContext.js";

function UserDetails({ userData }) {
  const userData = useContext(userDataContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <h4>{userData}</h4>
    </div>
  );
}

export default UserDetails;

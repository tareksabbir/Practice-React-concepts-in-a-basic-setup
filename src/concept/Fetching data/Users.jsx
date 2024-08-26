import { useEffect, useState } from "react";
import UserData from "./UserData";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div className="grid  grid-cols-4  mt-10">
        {users.slice(0, 8).map((user) => (
          <UserData key={user.id} user={user}></UserData>
        ))}
      </div>
    </div>
  );
};

export default Users;

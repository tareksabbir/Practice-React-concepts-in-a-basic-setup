import { useLoaderData } from "react-router-dom";
import RandomUser from "./RandomUser";
import BasicForm from "../concept/Form/BasicForm";

const RandomUsers = () => {
  const users = useLoaderData();
  return (
    <div className="container mx-auto p-5">
      <BasicForm></BasicForm>
      <div className="grid grid-cols-3 gap-5 mx-auto text-center">
        {users.map((user) => (
          <RandomUser key={user.id} user={user}></RandomUser>
        ))}
      </div>
    </div>
  );
};

export default RandomUsers;

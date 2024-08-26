import { useState } from "react";
import UserComponent from "./userComponent";
import { useEffect } from "react";

//here container contains all fetching data and side effects but components are side effect less
const UserContainer = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      if (!json.data) return;
      setUser(json.data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserComponent
      user={user}
      isLoading={isLoading}
      error={error}
    ></UserComponent>
  );
};

export default UserContainer;

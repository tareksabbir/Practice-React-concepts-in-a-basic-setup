/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PracticeComponent from "./PracticeComponent";

const PracticeContainer = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const getUserData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users");
      const json = await res.json();
      console.log(json.data);
      if (!json.data) return;
      setUser(json.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <PracticeComponent
      users={user}
      error={error}
      isLoading={isLoading}
    ></PracticeComponent>
  );
};

export default PracticeContainer;

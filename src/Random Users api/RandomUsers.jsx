import { useLoaderData } from "react-router-dom";
import RandomUser from "./RandomUser";
import BasicForm from "../concept/Form/BasicForm";
import StateBasedForm from "../concept/Form/StateBasedForm";
import RefForm from "../concept/Form/RefForm";
import CustomHookForm from "../concept/Form/CustomHookForm";
import PracticeHookForm from "../concept/Form/PracticeHookForm";
import ReuseableForm from "../concept/Form/ReuseableForm";
import Grandfather from "../concept/Contex Api/GrandFather/Grandfather";

const RandomUsers = () => {
  const users = useLoaderData();
  return (
    <div className="container mx-auto p-5">

      <Grandfather></Grandfather>
      
      <div className="grid grid-cols-3 gap-5 mx-auto text-center mb-10 ">
        {users.map((user) => (
          <RandomUser key={user.id} user={user}></RandomUser>
        ))}
      </div>
      <hr />
      <div className="grid grid-cols-3 mt-5">
        <BasicForm></BasicForm>
        <StateBasedForm></StateBasedForm>
        <RefForm></RefForm>
        <CustomHookForm></CustomHookForm>
        <PracticeHookForm></PracticeHookForm>
        <ReuseableForm formTitle={"This is Sign Up"}></ReuseableForm>
        <ReuseableForm formTitle={"This is Register"}></ReuseableForm>
      </div>
    </div>
  );
};

export default RandomUsers;

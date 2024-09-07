import { useContext, useEffect } from "react";
import { NameContext } from "../Hook/nameContex";
import Special from "../Special/Special";


const Myself = () => {
  const {name,setName} = useContext(NameContext)
  useEffect (()=>{
    setName("urmila")
  },[setName])
  return (
    <div className=" border rounded p-5 ">
      <h1>MySelf yo yo honey Sing</h1>
      <div className=" border rounded p-5 mt-5">
      <Special name = {name}></Special>
    </div>
    </div>
   
  );
};

export default Myself;

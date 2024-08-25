import Counting from "../concept/Counting/Counting";
import Fetching2 from "../concept/Fetching data/Fetching2";
import FetchingData from "../concept/Fetching data/FetchingData";
import Users from "../concept/Fetching data/Users";
import Props from "../concept/props/Props";
import ArrayMapRendering from "../concept/rendering/ArrayMapRendering";
import ConditionalRendering from "../concept/rendering/ConditionalRendering";
import ObjectInsideArrayMapping from "../concept/rendering/ObjectInsideArrayMapping";

const obj = {
  names: "jone",
  ages: 20,
  salary: 3000,
  isDone: false,
};
const arr = ["rohim", "korim", "sakib", "korima"];
const Phase1 = () => {
  return (
    <>
    <div className="text-5xl font-medium bg-black text-white text-center p-10 ">
    <h1 className=" text-blue-300">
        This is Phase 1 Basics
      </h1>
      <ol className="text-center font-bold text-lg  flex justify-center  gap-5 mt-5">
        <li>component</li>
        <li>props</li>
        <li>conditional rendering</li>
        <li>state management</li>
        <li>api rendering</li>
      </ol>
    </div>
      

      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-xl font-medium bg-green-600 text-white text-center p-5 mb-10">
            Here is props practice and the component
          </h1>
          <Props></Props>
        </div>
       <div>
       <h1 className="text-xl font-medium bg-blue-400 text-white text-center p-5 mb-10">
          here is conditional rendering
        </h1>
        <ConditionalRendering obj={obj}></ConditionalRendering>
       </div>

       <div>
       <h1 className="text-xl text-center bg-yellow-700 font-medium text-white p-5 mb-10">
          here is counting by state management
        </h1>
        <Counting></Counting>
       </div>
      <div>
      <h1 className=" bg-amber-400 font-bold text-center p-5  text-white text-xl">
          This is array map data
        </h1>
        {arr.map((names) => (
          <ArrayMapRendering arr={names} key={1}></ArrayMapRendering>
        ))}
      </div>
       <div>
       <h1 className=" bg-teal-600 font-bold text-center p-5  text-white text-xl">
          Data Fetching from Json api
        </h1>
        <ObjectInsideArrayMapping></ObjectInsideArrayMapping>
       </div>
        <div>
        <h1 className=" bg-cyan-500 font-bold text-center p-5  text-white text-xl">
          Data Fetching from Json api
        </h1>
        <FetchingData></FetchingData>
        <Fetching2></Fetching2>
        </div>
      </div>
      <h1 className=" bg-teal-800 font-bold text-center p-5 mt-10 text-white text-xl">
        {" "}
        Practice Data Fetching from Json api
      </h1>
      <Users></Users>
    </>
  );
};

export default Phase1;

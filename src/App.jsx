import Counting from "./concept/Counting/Counting";
import Props from "./concept/props/Props";
import ConditionalRendering from "./concept/rendering/ConditionalRendering";

const obj = {
  names: "jone",
  ages: 20,
  salary: 3000,
  isDone: false,
};
const App = () => {
  return (
    <>
      <h1 className="text-xl font-medium bg-green-600 text-white text-center p-5 mb-10">Here is props practice and the component</h1>
      <Props></Props>
      <hr />
      <h1 className="text-xl font-medium bg-blue-400 text-white text-center p-5 mb-10">here is conditional rendering</h1>
      <ConditionalRendering obj={obj}></ConditionalRendering>
      <hr />
      <h1 className="text-xl text-center bg-yellow-700 font-medium text-white p-5 mb-10">here is counting</h1>
      <Counting></Counting>
    </>
  );
};

export default App;

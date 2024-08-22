import { useState } from "react";

const Counting = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const fetchData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div className="text-center">
        <h1 className="mb-10 text-3xl font-bold">{count}</h1>
        <button
          onClick={() => increment()}
          className="px-5 py-3 bg-green-600 rounded-md mr-5 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-5 py-3 bg-orange-600 rounded-md mr-5 text-white"
        >
          Clear event
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-3 bg-pink-400 rounded-md mr-5 text-white"
        >
          Reduce one
        </button>
        <button
          onClick={() => fetchData()}
          className="px-5 py-3 bg-blue-500 rounded-md mr-5 text-white"
        >
          Data fetching
        </button>
      </div>
    </>
  );
};

export default Counting;

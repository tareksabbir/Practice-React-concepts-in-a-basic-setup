import { useState } from "react";

const Counting = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
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
        
      </div>
    </>
  );
};

export default Counting;

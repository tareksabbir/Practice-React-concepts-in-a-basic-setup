import { useState } from "react";

const FetchingData = () => {
  const [comments, setComments] = useState([]);

  const fetches = async () => {
    await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  return (
    <>
      <div className="text-center mt-5">
        <button
          onClick={() => fetches()}
          className="px-5 py-3 bg-purple-500 rounded-md mr-5 text-white text-center  mb-5"
        >
          Click here for fetching
        </button>
      </div>

      {comments.map((item, index) => (
        <div key={index} className="flex justify-center gap-5 ">
          <h1> Email : {item.email}</h1>
          <h1> comment : {item.name}</h1>
        </div>
      ))}
    </>
  );
};

export default FetchingData;

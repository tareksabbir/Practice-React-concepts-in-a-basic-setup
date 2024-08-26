import { useEffect, useState } from "react";

const Fetching2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="text-center">
            <h1>{item.email}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Fetching2;

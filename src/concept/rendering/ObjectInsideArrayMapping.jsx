const ObjectInsideArrayMapping = () => {
  const player = [
    { name: "jonybhai", age: 40 },
    { name: "jonbro", age: 50 },
    { name: "jonsina", age: 60 },
    { name: "jonama", age: 44 },
  ];
  return (
    <>
      <h1 className="text-center font-bold mt-5 mb-5">
        Data rendering from an array which contain objects
      </h1>
      {player.map((item, index) => (
        <div key={index} className="text-center flex justify-center gap-10">
          <h1>
            <span className="text-lg font-bold">Name :</span> {item.name}
          </h1>
          <h1>
            {" "}
            <span className="text-lg font-bold">Age :</span>
            {item.age}
          </h1>
        </div>
      ))}
    </>
  );
};

export default ObjectInsideArrayMapping;

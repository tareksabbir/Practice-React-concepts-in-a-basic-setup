const ObjectInsideArrayMapping = () => {
  const player = [
    { name: "jonybhai", age: 40 },
    { name: "jonbro", age: 50 },
    { name: "jonsina", age: 60 },
    { name: "jonama", age: 44 },
  ];
  return (
    <>
      {player.map((item) => (
        <div key={1}>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
    </>
  );
};

export default ObjectInsideArrayMapping;

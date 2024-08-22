/* eslint-disable react/prop-types */

function Props() {
  return (
    <>
      <Student name="tarek" age="25"></Student>
      <Employe
        info={[{ name: "yo yo chukulala", salary: 2000, age: 20 }]}
      ></Employe>
      <Experiment
        data={{ name: "kaluy mea", salary: 4000, age: 20 }}
      ></Experiment>
    </>
  );
}

function Student({ name, age }) {
  return (
    <>
      <div className="text-center">
        <h1>hi im a student props</h1>
        <h2>my name is a {name}</h2>
        <h3>my age is {age}</h3>
      </div>
    </>
  );
}

function Experiment({ data }) {
  const { name, age } = data;
  return (
    <>
      <div className="text-center mt-5">
        
        <h1>hi im a experiment</h1>
        <h2>my name is a {name}</h2>
        <h3>my age is {age}</h3>
      </div>
      ;
    </>
  );
}

function Employe({ info }) {
  return (
    <>
      {info.map((data) => {
        <div>
          <h1>hi im a student</h1>
          <h2>my name is a {data.name}</h2>
          <h3>my age is {data.age}</h3>
        </div>;
      })}
    </>
  );
}

export default Props;

/* eslint-disable react/prop-types */

const ConditionalRendering = ({ obj }) => {
  const { names, ages, salary, isDone } = obj;
  return (
    <div className="mb-5 text-center">
      <h1>
        {isDone ? "hey man : " : " do it man : "} {names}
      </h1>
      <h1>{ages}</h1>
      <h1>{salary}</h1>
    </div>
  );
};

export default ConditionalRendering;

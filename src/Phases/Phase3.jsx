import BottlesDataLoad from "../Bottle API/Container/BottlesDataLoad";

const Phase3 = () => {
  return (
    <>
    <div>
      <div className="text-5xl font-medium bg-black text-white text-center p-10 ">
        <h1 className=" text-blue-300">This is Phase 3 advance</h1>
        <ol className="text-center font-bold text-lg  flex justify-center  gap-5 mt-5">
          <li>
            Here we practice data loade from json file and store the data in the
            local storage{" "}
          </li>
        </ol>
      </div>
    </div>
    <BottlesDataLoad></BottlesDataLoad>
    </>
  );
};

export default Phase3;

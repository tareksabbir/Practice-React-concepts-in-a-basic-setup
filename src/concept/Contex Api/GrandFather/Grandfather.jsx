import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const Grandfather = () => {
  return (
    <div className="border rounder p-10 flex items-center justify-center">
      <div>
        <h1 className="text-center mb-5 font-bold text-2xl">Grandfather</h1>
        <div className="flex  gap-5 ">
          <Dad></Dad>
          <Aunty></Aunty>
          <Uncle></Uncle>
        </div>
      </div>
    </div>
  );
};

export default Grandfather;

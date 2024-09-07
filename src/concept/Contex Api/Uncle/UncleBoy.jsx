import { useContext, useEffect } from "react";
import { NameContext } from "../Hook/nameContex";
import Special from "../Special/Special";

const UncleBoy = () => {
  const { name, setName } = useContext(NameContext);
  useEffect(() => {
    setName("shormila");
  }, [setName]);
  return (
    <div className=" border rounded p-5">
      <h1>Rubayat</h1>
      <div className=" border rounded p-5 mt-5">
        <Special name={name}></Special>
      </div>
    </div>
  );
};

export default UncleBoy;

import Myself from "./Myself";

const Dad = () => {
    return (
        <div className="border rounded  p-5 text-center">
        <h1 className="text-xl font-bold p-5">Dad</h1>
        <div className="flex
        gap-5">
            <Myself></Myself>
        </div>
    </div>
    );
};

export default Dad;
import UncleBoy from "./UncleBoy";
import UncleGirl from "./UncleGirl";

const Uncle = () => {
    return (
        <div className="border rounded  p-5 text-center">
            <h1 className="text-xl font-bold p-5">Uncle</h1>
            <div className="flex
            gap-5">
                <UncleBoy></UncleBoy>
                <UncleGirl></UncleGirl>
            </div>
        </div>
    );
};

export default Uncle;
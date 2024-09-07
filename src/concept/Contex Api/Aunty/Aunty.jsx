import AuntyBoy from "./AuntyBoy";
import AuntyGirl from "./AuntyGirl";

const Aunty = () => {
    return (
<div className="border rounded  p-5 text-center">
<h1 className="text-xl font-bold p-5">Aunty</h1>
<div className="flex
gap-5">
    <AuntyBoy></AuntyBoy>
    <AuntyGirl></AuntyGirl>
</div>
</div> 
    );
};

export default Aunty;



import VisitedCountry from "../Components/VisitedCountry";

const VisitedCountryContainer = ({visitedCountry,removeCountry}) => {
  return (
    <>
      <div className="text-center text-lg font-bold mt-10">
        <h1> Visited Country :{visitedCountry.length}</h1>
      </div>
      <div className=" grid grid-cols-5 mx-20">
      {
        visitedCountry.map((country,index)=>{
            return <VisitedCountry key={index} country={country} removeCountry={removeCountry}></VisitedCountry>
        })
      }
      </div>
    </>
  );
};

export default VisitedCountryContainer;

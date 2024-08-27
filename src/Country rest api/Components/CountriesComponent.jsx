import { useState } from "react";

const CountriesComponent = (props) => {
  const { country, isLoading, error, handleVisitedCountry } = props;
  const { name, flags, capital, region } = country;
  const [isVisit, setIsVisit] = useState(false);

  const handleVisit = (country) => {
    setIsVisit(!isVisit);
    handleVisitedCountry(country);
  };

  if (isLoading) return <div>...loading</div>;
  if (error) return <div>Something Went Wrong</div>;

  return (
    <div className="text-center m-5 p-5 border rounded-xl shadow-xl relative z-0 transition-all duration-300 hover:scale-110">
      <img
        src={flags.png}
        className="mx-auto w-[100px] max-h-[60px] mt-5"
        alt=""
      />
      <h1 className="mt-5">{name.common}</h1>
      <h1>Capital : {capital}</h1>
      <h1>Region : {region}</h1>
      <button
        onClick={() => handleVisit(country)}
        className={
          isVisit
            ? "select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
            : "select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
        }
        type="button"
      >
        {isVisit ?  "Visited": " should visit"}
      </button>
    </div>
  );
};

export default CountriesComponent;

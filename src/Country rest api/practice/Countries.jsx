/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Country from "./Country";
import Visited from "./Visited";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [details, SetDetails] = useState([]);

  const fetchingData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const json = await res.json();
      if (!json) return;
      setCountries(json);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handelDetails = (country) => {
    const newArray = details.filter((c) => c !== country)
    SetDetails([...newArray,country])
  };
  const handelRemoveCountry = (country) => {
    SetDetails(
        details.filter((c) => c !== country)
      );
  };

  return (
    <>
      <h1 className="text-center font-bold text-xl mt-5">
        This is country component
      </h1>

      <div className="text-center mt-5 font-bold">
        Visited Country Details : {details.length}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-5 mx-20">
        {details.map((country) => {
          return (
            <Visited
              key={country.name.common}
              country={country}
              handelRemoveCountry={handelRemoveCountry}
            ></Visited>
          );
        })}
      </div>

      <h2 className="text-center mt-5 font-semibold">
        See All Country : {countries.length}
      </h2>
      <div className="grid grid-cols-5 gap-4 mt-10 mx-20">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            isLoading={isLoading}
            error={error}
            handelDetails={handelDetails}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;

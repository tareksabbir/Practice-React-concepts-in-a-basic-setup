/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CountriesComponent from "../Components/CountriesComponent";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const getCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      if (!json) return;
      setCountries(json);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-20 ">
        This is country component{" "}
      </h1>
    
      <div className="grid grid-cols-3 mx-20  gap-5  ">
        {countries.map((country) => {
          return (
            <CountriesComponent
              key={country.name.common}
              country={country}
            ></CountriesComponent>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesContainer;

const CountriesComponent = (props) => {
  const { country, isLoading, error } = props;
  const { name, flags, capital, region } = country;
  if (isLoading)return <div>...loading</div>;
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
        class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
        type="button"
      >
        visit
      </button>
    </div>
  );
};

export default CountriesComponent;

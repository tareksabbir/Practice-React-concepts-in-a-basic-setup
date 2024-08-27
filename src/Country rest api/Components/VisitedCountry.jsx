const VisitedCountry = ({ country ,removeCountry}) => {
  const { name, flags } = country;

  return (
    <div className="text-center m-5 p-5 border rounded-xl shadow-xl relative z-0 transition-all duration-300 hover:scale-110">
      <img
        src={flags.png}
        className="mx-auto w-[100px] max-h-[60px] mt-5"
        alt=""
      />
      <h1 className="mt-5">{name.common}</h1>
      <button
      onClick={()=>removeCountry(country)}
        className=
            "select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
            
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default VisitedCountry;

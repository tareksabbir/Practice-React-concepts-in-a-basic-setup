const Bottle = ({ bottle, loading, error ,handleCart}) => {
  if (loading) return <div>...loading</div>;
  if (error) return <div>something went wrong</div>;
  if (!bottle) return null;

  return (
    <>
      <div className="text-center m-5 p-5 border rounded-lg shadow-xl relative z-0 transition-all duration-300 hover:scale-110">
        <img src={bottle.img} className="w-[300px] mx-auto" alt="" />
        <h1 className="text-lg font-medium mt-5">{bottle.name}</h1>
        <p>price : $ {bottle.price} </p>
        <button
        onClick={()=>handleCart(bottle)}
          className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-teal-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Bottle;

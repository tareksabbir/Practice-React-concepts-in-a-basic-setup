const Cart = ({ cart, handleRemove }) => {
  return (
  
    <div className="text-center m-5 p-5 border rounded-lg shadow-xl relative z-0 transition-all duration-300 hover:scale-110">
    <img src={cart.img} className="w-[300px] mx-auto" alt="" />
    <h1 className="text-lg font-medium mt-5">{cart.name}</h1>
    <p>price : $ {cart.price} </p>
    <button
   onClick={() => handleRemove(cart.id)}
      className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-teal-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
      type="button"
    >
      remove
    </button>
  </div>
  );
};

export default Cart;

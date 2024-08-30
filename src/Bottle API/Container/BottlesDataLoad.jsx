/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Bottle from "../components/Bottle";
import { addCartId, getCartId, removeCartFromLs } from "../Utils/LocalStorage";
import Cart from "../components/cart";

const BottlesDataLoad = () => {
  const [bottles, setBottles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([]);

  const getBottlesData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      if (!data) return;
      setBottles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBottlesData();
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const cartId = getCartId();
      const cartItems = [];
      for (let id of cartId) {
        const bottle = bottles.find((item) => item.id === id);
        if (bottle) {
          cartItems.push(bottle);
        }
      }
      setCart(cartItems);
    }
  }, [bottles]);

  const handleCart = (item) => {

      setCart([...cart, item]);
    
    addCartId(item.id);
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    removeCartFromLs(id);
  };

  return (
    <>
      <h1 className="text-center text-xl font-bold mt-5">
        Total Cart : {cart.length}
      </h1>
      <div className="grid grid-cols-4">
        {cart.map((c) => (
          <Cart key={c.id} cart={c} handleRemove={handleRemove}></Cart>
        ))}
      </div>
      <h1 className="text-center text-2xl font-bold mt-5">
        Total Item : {bottles.length}
      </h1>

      <div className="grid grid-cols-4 ">
        {bottles.map((bottle) => {
          return (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              loading={loading}
              error={error}
              handleCart={handleCart}
            ></Bottle>
          );
        })}
      </div>
    </>
  );
};

export default BottlesDataLoad;

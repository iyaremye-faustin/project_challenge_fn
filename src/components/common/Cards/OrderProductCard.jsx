import React, { useState } from 'react';
import toast from "react-hot-toast";
import Button from '../../reusable/Button';
import { getCartFromLocalStorage,saveCartToLocalStorage } from '../../../api/localStorage';
import { notificationErrorStyles } from '../../constants/app';
import useAppStore from '../../store/AppStore';

const OrderProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [size,setSize] = useState(0);
  const { cartItems, setCartItems } = useAppStore((state) => state);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const increaseQuantity = () => {
    handleQuantityChange(quantity + 1);
  };
  const isProductInCart = getCartFromLocalStorage().some(
    (cartItem) => cartItem.item.product_id === item.product_id);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };
  const addToCart = () => {
    const cartItem = { item, quantity };
    if (!isProductInCart) {
        const updatedCart = [...getCartFromLocalStorage(), cartItem];
        saveCartToLocalStorage(updatedCart);
        setCartItems(updatedCart);
        setQuantity(1);
        toast('Product is added to cart');
    }else{
        toast.error('Product Already added',{ className: notificationErrorStyles });
    }
};

  return (
    <div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-md w-full" src={item.image_url} alt={item.name} />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{item.name}</h5>
        <p className="text-base mb-4">{item.description}</p>
      </div>
      <div className='flex flex-col justify-center items-center m-2 gap-2'>
        <h4>Land Size (In Acres)</h4>
        <input type="text" placeholder='Land Size' className='border border-gray-400 p-1 rounded-[8px] font-[300] outline-none w-1/2' defaultValue={0}/>
      </div>
      <div className="flex justify-center items-center mb-2">
        <div>
          <Button
            classStyles="border border-gray-400 text-gray-700 text-sm rounded-full px-2 py-1"
            name="minus"
            value="-"
            type="button"
            handler={decreaseQuantity}
          />
        </div>
        <input
          type="text"
          readOnly
          className="text-center mx-1"
          value={quantity}
          style={{
            width: "2rem",
            height: "1.5rem",
            border: "none",
            textAlign: "center",
          }}
        />
        <span>Kg</span>
        <div>
          <Button
            classStyles="border ml-1 border-gray-400 text-gray-700 text-sm rounded-full px-2 py-1"
            name="plus"
            value="+"
            type="button"
            handler={increaseQuantity}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-2">
        <button
          className="rounded bg-main px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          name="cart"
          value="Add To Cart"
          type="button"
          onClick={addToCart}
        >
          Buy
          </button>
      </div>
    </div>
  );
};

export default OrderProductCard;

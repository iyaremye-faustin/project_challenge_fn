import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from '../../reusable/Button';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../../../api/localStorage';
import { notificationErrorStyles } from '../../constants/app';
import useAppStore from '../../store/AppStore';

const OrderProductCard = ({ item, acreSize, changeLandSize }) => {
  const [quantity, setQuantity] = useState(acreSize);
  const { cartItems, setCartItems } = useAppStore((state) => state);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    changeLandSize(newQuantity);
  };

  const increaseQuantity = () => {
    handleQuantityChange(quantity + 1);
  };
  const isProductInCart = getCartFromLocalStorage().some(
    (cartItem) => cartItem.item.product_id === item.product_id
  );

  const decreaseQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  const addToCart = () => {
    const cartItem = { item, quantity: acreSize };
    const cart = getCartFromLocalStorage();
    if (!isProductInCart) {
      const updatedCart = [...cart, cartItem];
      const updatedCartWithFixedQuantity = updatedCart.map((item) => ({
        ...item,
        quantity: acreSize
      }));
      saveCartToLocalStorage(updatedCartWithFixedQuantity);
      setCartItems(updatedCartWithFixedQuantity);
      toast.success('Product is added to cart');
    } else {
      toast.error('Product Already added', { className: notificationErrorStyles });
    }
  };

  const initPage = () => {
    const cart = getCartFromLocalStorage();
    setCartItems(cart);
  };

  useEffect(() => {
    initPage();
  }, []);

  return (
    <div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-md rounded-t-md h-40 w-full" src={item.image_url} alt={item.name} />
      </div>
      <div className="p-3">
        <h5 className="mb-2 text-xl font-medium leading-tight">{item.name}</h5>
        <p className="text-base mb-4">{item.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center m-2 gap-2">
        <h4>{item.category.name}</h4>
      </div>
      <div className="flex justify-center items-center mb-2">
        <div>
          <Button
            classStyles="border border-gray-400 text-gray-700 text-sm rounded-md px-2 py-1"
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
          value={acreSize}
          style={{
            width: '2rem',
            height: '1.5rem',
            border: 'none',
            textAlign: 'center'
          }}
        />
        <span>Acres</span>
        <div>
          <Button
            classStyles="border ml-1 border-gray-400 text-gray-700 text-sm rounded-md px-2 py-1"
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

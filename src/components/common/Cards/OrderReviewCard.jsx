import React from 'react';

const OrderReviewCard = ({ product, index, removeItem }) => {
  const { item } = product;
  return (
    <div className="flex flex-col w-full">
      <div className="block max-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <div className="p-6 flex flex-col w-full">
          <div className="flex flex-row justify-content-evenly w-full">
            <div className="flex-none p-2 m-2 rounded border border-gray-300">
              <p className="font-medium font-bold mr-1 pr-1">Name</p>
              <p>{item.name}</p>
            </div>
            <div className="flex-none p-2 m-2 rounded border border-gray-300">
              <p className="font-medium font-bold mr-1 pr-1">Quantity</p>
              <p>{product.quantity * item.quantity_per_acre} Kgs</p>
            </div>
            <div className="flex-none p-2 m-2 rounded border border-gray-300">
              <p className="font-medium font-bold mr-1 pr-1">Price</p>
              <p>{item.price}</p>
            </div>
            <div className="flex-none p-2 m-2 rounded border border-gray-300">
              <p className="font-medium font-bold mr-1 pr-1">Total</p>
              <p>{product.quantity * item.quantity_per_acre * item.price} RWF</p>
            </div>
          </div>
          <div className="flex flex-row justify-content-end items-end">
            <button
              type="button"
              className="inline-block rounded bg-red px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReviewCard;

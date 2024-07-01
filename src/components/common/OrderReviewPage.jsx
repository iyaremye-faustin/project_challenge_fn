import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../ui/DashboardHeader';
import OrderReviewCard from './Cards/OrderReviewCard';
import useAppStore from '../store/AppStore';
import { addProductOrder } from '../../api/order';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../../api/localStorage';

const OrderReviewPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { setLoading, setCartItems } = useAppStore();
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalLandSize, setLandSize] = useState(0);

  const initPage = () => {
    setLoading(true);
    const cart = getCartFromLocalStorage();
    setItems(cart);
    setCartItems(cart);
    setLoading(false);
  };

  const goToOrdersPage = () => {
    navigate('/farmer/make/orders');
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setCartItems(updatedItems);
    saveCartToLocalStorage(updatedItems);
  };

  const submitOrder = async () => {
    const orderItems = [];
    items.map((val) => {
      const t = {
        product_id: val.item.product_id,
        quantity: val.quantity,
        price: val.item.price
      };
      orderItems.push(t);
    });
    const res = await addProductOrder({
      items: orderItems,
      land_size_acre: totalLandSize,
      total_amount: totalAmount
    });
    if (res.status) {
      setItems([]);
      setCartItems([]);
      saveCartToLocalStorage([]);
    }
  };

  const calculateTotalAmount = () => {
    let total = 0;
    let totalLand = 0;
    items.forEach((item) => {
      const price = parseFloat(item.item.price);
      const oneperacre = parseFloat(item.item.quantity_per_acre);
      const quantity = parseFloat(item.quantity);
      totalLand = item.quantity;
      const totalQuantity = oneperacre * quantity;
      const totalForItem = price * totalQuantity;
      total += totalForItem;
    });
    setLandSize(totalLand);
    return total;
  };

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    const total = calculateTotalAmount();
    setTotalAmount(total);
  }, [items]);

  return (
    <div className="flex flex-col p-2 gap-2">
      <DashboardHeader headerTitle={'Order'} subTitle={'Review'} />
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((el, index) => (
          <OrderReviewCard key={index} product={el} index={index} removeItem={removeItem} />
        ))}
      </div>
      <div className="flex flex-col">
        {items.length > 0 && (
          <div className="flex flex-row justify-end items-end">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row">
                <p className="font-medium font-bold pr-1">Total Amount {totalAmount} RWF</p>
              </div>
              <div className="flex flex-row gap-1 justify-end items-end">
                <button
                  type="button"
                  className="p-3 rounded-[8px] bg-main text-white"
                  onClick={submitOrder}
                >
                  CONFIRM ORDER
                </button>
              </div>
            </div>
          </div>
        )}
        {items.length == 0 && (
          <div className="flex flex-col items-center">
            <button className="py-2 px-4 rounded-[8px] bg-main cursor-pointer hover:opacity-80 transition-all flex flex-row gap-2 items-center" onClick={goToOrdersPage}>
              <span className="text-[14px] text-white font-[300]">New Order</span>
              <span className="text-[18px] text-white font-[300]">+</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderReviewPage;

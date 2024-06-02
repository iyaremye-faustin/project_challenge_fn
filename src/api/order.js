import toast from 'react-hot-toast';
import { api } from '.';

export const getAllOrders = async (page = 1, limit = 5) => {
  try {
    const queryParams = {
      page,
      limit,
    };
    const { data } = await api.get('/orders',{ params: queryParams });
    if (data.status == '200') {
      return data.data;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const addProductOrder=async(order)=>{
  try {
    const { data } = await api.post('/orders', order);
    if (data.status=='201') {
      toast.success('Order Added Suucessfully!');
      return { status: true, message: 'Order Added!' };
    }
    toast.error('Unable to add order');
    return { status: true, message: 'Unable to add order!' };
  } catch (error) {
    const message = error.response ? error.response.data.message : 'Unable to order';
    if (error.response) {
      toast.error(message);
      return {
        status: false,
        message: error.response.message ? error.response.message : 'Failed!'
      };
    }
    return { status: false, message: 'Failed!' };
  }
}

export const approveOrder = async(orderId)=>{
  try {
    const { data } = await api.put(`/orders/${orderId}/approve`);
    if (data.status == '200') {
      return true;
    }
  } catch (error) {
    return false;
  } 
}
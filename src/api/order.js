import { api } from ".";

export const getAllOrders=async()=>{
  try {
    const { data } = await api.get('/orders');
    if (data.status =='200') {
      return data.data
    }
    return []
  } catch (error) {
    return [];
  }
}
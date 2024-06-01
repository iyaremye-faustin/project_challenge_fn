import toast from "react-hot-toast";
import { api } from ".";

export const getAllProducts =async()=>{
  try {
    const { data } = await api.get('/products');
    if (data.status =='200') {
      return data.data
    }
    return []
  } catch (error) {
    return [];
  }
}


export const saveProduct=async(product)=>{
  try {
    const {data} = await api.post('/products',product)
    if (data.status) {
      return { status: true, message: 'Product Added!' };
    }
    toast.error('Unable to add product')
    return { status: true, message: 'Unable to add product!' };
  } catch (error) {
    const message =  error.response.data ? error.response.data.message : 'Unable to add product'; 
    if (error.response) {
      return { status: false, message: error.response.message ? error.response.message : 'Login failed!' };
    }
    return { status: false, message: 'Failed!' };
  }
}
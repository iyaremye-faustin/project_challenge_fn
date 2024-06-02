import toast from 'react-hot-toast';
import { api } from '.';

export const getAllProducts = async () => {
  try {
    const { data } = await api.get('/products');
    if (data.status == '200') {
      return data.data;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const getProductsByCategory=async(categoryId)=>{
  try {
    const { data } = await api.get(`/products/category/${categoryId}`);
    if (data.status == '200') {
      return data.data;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export const saveProduct = async (product) => {
  try {
    const { data } = await api.post('/products', product);
    if (data.status=='200') {
      toast.success('Product Added Successfully!');
      return { status: true, message: 'Product Added!' };
    }
    toast.error('Unable to add product');
    return { status: true, message: 'Unable to add product!' };
  } catch (error) {
    const message = error.response ? error.response.data.message : 'Unable to add product';
    if (error.response) {
      toast.error(message);
      return {
        status: false,
        message: error.response.message ? error.response.message : 'Failed!'
      };
    }
    return { status: false, message: 'Failed!' };
  }
};

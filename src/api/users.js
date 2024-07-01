import { api } from '.';

export const getRoles = async () => {
  try {
    const queryParams = {};
    const { data } = await api.get('/roles', { params: queryParams });
    if (data.status == '200') {
      return data.data;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const getAllUsers = async (page = 1, limit = 5) => {
  try {
    const queryParams = {
      page,
      limit
    };
    const { data } = await api.get('/users', { params: queryParams });
    if (data.status == '200') {
      return data.data;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const changeRole = async (role) => {
  try {
    const { data } = await api.put('/users/change-role', role);
    if (data.status == '200') {
      return true;
    }
  } catch (error) {
    return false;
  }
};

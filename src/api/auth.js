import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { baseURL, api } from '.';
import toast from 'react-hot-toast';

export const authLogin = async (login) => {
  try {
    const { data } = await axios.post(`${baseURL}/users/signin`, login);
    console.log(data);
    if (data.status == '200') {
      const decodedToken = jwtDecode(data.data.token);
      const { payload } = decodedToken;
      localStorage.setItem(
        'farm_sys_token',
        JSON.stringify({
          accessToken: data.data.token,
          user: {
            email: payload.email,
            fullName: payload.full_name,
            phoneNumber: payload.phone_number,
            userId: payload.user_id,
            username: payload.username,
            role: payload.role.role_name
          }
        })
      );
      sessionStorage.setItem('farm_sys_token', data.data.token);

      return {
        status: true,
        role: payload.role.role_name,
        userId: payload.user_id,
        mesage: 'Login Successful'
      };
    }
    return { status: false, message: 'Invalid Username or Password!' };
  } catch (error) {
    if (error.response) {
      return {
        status: false,
        message: error.response.message ? error.response.message : 'Login failed!'
      };
    }
    return { status: false, message: 'Login failed!' };
  }
};

export const authRegister = async (user) => {
  try {
    const { data } = await api.post(`/users/signup`, user);
    if (data.status == '201') {
      toast.success('Successfully Registered,Login!');
      return { status: true, message: 'Successfully registered' };
    }
    return { status: true, message: 'Unable to signup!' };
  } catch (error) {
    const message = error.response.data ? error.response.data.message : 'Unable to add product';
    toast.error(message);
    if (error.response) {
      return { status: false, message: message };
    }
    return { status: false, message: 'Failed!' };
  }
};

export const isLoggedIn = async () => {
  const userData = JSON.parse(localStorage.getItem('farm_sys_token'));
  const { exp } = jwtDecode(userData.accessToken);
  const currentTime = Math.floor(Date.now() / 1000);
  if (exp > currentTime) {
    return { status: true, user: userData.user };
  }
  return { status: false, user: {} };
};

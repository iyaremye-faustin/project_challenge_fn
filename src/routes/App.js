import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Farmer from '../portal/Farmer';
import FarmerHome from '../components/Farmer/FarmerHome';
import Products from '../components/common/Products';
import Orders from '../components/common/Orders';
import Order from '../components/common/Order';
import Accounts from '../components/admin/Accounts';
import AdminProducts from '../components/admin/AdminProducts';

import Admin from '../portal/Admin';
import Login from '../auth/Login';
import Logout from '../portal/Logout';
import Register from '../auth/Register';

function App() {
  return (
    <div className="App min-h-[100vh] w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Accounts />} />
          <Route path="users" element={<Accounts/>}/>
          <Route path="products" element={<AdminProducts/>}/>
        </Route>
        <Route path="/farmer" element={<Farmer />}>
          <Route index element={<FarmerHome />} />
          <Route path="products" element={<Products />}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="make/orders" element={<Order/>}/>
        </Route>
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;

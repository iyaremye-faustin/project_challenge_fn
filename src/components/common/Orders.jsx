import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../../api/order';
import DataTable from '../ui/DataTable';
import DashboardHeader from '../ui/DashboardHeader';
import Filter from '../admin/parts/Filter';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/AppStore';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const { loading, setLoading, pageSize, currentPage, setCurrentPage, totalPages, setTotalPages, itemsPerPage } = useAppStore(
    (state) => state
  );
  const navigate = useNavigate();
  const getOrders = async () => {
    setLoading(true);
    const res = await getAllOrders(currentPage, pageSize);
    if (res) {
      const { orders, count } = res;
      orders.map((el) => {
        (el.names = el.user.full_name),
          (el.quantity = el.items.length),
          (el.payed = el.is_paid ? 'Paid' : 'Not Paid'),
          (el.date = new Date(el.createdAt).toDateString());
      });
      const pages = Math.ceil(count / itemsPerPage);
      setTotalPages(pages);
      setOrders(orders);
      setTotalItems(count);
    }
    setLoading(false);
  };

  const ordersColumns = [
    'order_id',
    'quantity',
    'land_size_acre',
    'total_amount',
    'payed',
    'date'
  ];

  const ordersLabels = {
    order_id: 'Order ID',
    names: 'Names',
    quantity: 'Total Items',
    land_size_acre: 'Land Size',
    total_amount: 'Amount in RWF',
    payed: 'Payment Status',
    date: 'Time Created'
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToOrdersPage = () => {
    navigate('/farmer/make/orders');
  };

  useEffect(() => {
    getOrders();
  }, [currentPage, pageSize]);

  return (
    <div className="flex flex-col p-2 gap-2">
      <DashboardHeader headerTitle={'Orders'} subTitle={'All Orders'} />
      <Filter
        title="Orders"
        number={totalItems}
        url={'orders'}
        openCloseModal={() => {}}
        otherButton={goToOrdersPage}
      />
      <div className="relative">
        <div className="sticky top-0 bg-white shadow-md z-10">
          {!loading && (
            <DataTable
              data={orders}
              columns={ordersColumns}
              labels={ordersLabels}
              actions={[]}
              totalItems={totalItems}
              currentPage={currentPage}
              pageSize={pageSize}
              lastPage={totalPages}
              onPageChange={handlePageChange}
              onPageSizeChange={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;

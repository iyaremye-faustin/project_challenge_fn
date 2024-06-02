import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../../api/order';
import DataTable from '../ui/DataTable';
import DashboardHeader from '../ui/DashboardHeader';
import Filter from '../admin/parts/Filter';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/AppStore';

const StoreOrders = () => {
  const [orders, setOrders] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const { loading, setLoading, pageSize, currentPage, setCurrentPage } = useAppStore((state) => state);
  const navigate = useNavigate();
  const getOrders = async () => {
    setLoading(true)
    const res = await getAllOrders(currentPage,pageSize);
    if (res) {
     setOrders(res.orders)
     setTotalItems(res.count)
    }
    setLoading(false)
  };

  const ordersColumns = [
    'order_id',
    'payment_status',
    'createdAt',
  ];

  const ordersLabels = {
    oder_id: 'Order ID',
    payment_status: 'Payment Status',
    createdAt: 'Created Time'
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const goToOrdersPage = () => {
    navigate('/farmer/make/orders');
  };

  useEffect(() => {
    getOrders();
  }, [currentPage,pageSize]);

  return (
    <div className="flex flex-col p-2 gap-2">
      <DashboardHeader headerTitle={'Orders'} subTitle={'All Orders'} />
      <Filter
        title="Orders"
        number={totalItems}
        url={''}
        openCloseModal={() => {}}
        otherButton={''}
      />
      <div className="relative">
        <div className="sticky top-0 bg-white shadow-md z-10">
          {!loading && <DataTable
              data={orders}
              columns={ordersColumns}
              labels={ordersLabels}
              actions={[]}
              totalItems={totalItems}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              onPageSizeChange={()=>{}}
            />}
        </div>
      </div>
    </div>
  );
};

export default StoreOrders;

import React, {useEffect, useState} from 'react'
import { getAllOrders } from '../../api/order'
import DataTable from '../ui/DataTable'
import DashboardHeader from '../ui/DashboardHeader'
import Filter from '../admin/parts/Filter'
import { useNavigate } from 'react-router-dom'

const Orders=()=> {
  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();
  const getOrders =async()=>{
    const res = await getAllOrders();
    setOrders(res);
  }

  const ordersColumns = [
    'chargeBoxId',
    'ownerEmail',
    'locationLatitude',
    'locationLongitude',
    'registrationStatus',
    'chargeStatus',
  ];

  const ordersLabels = {
    chargeBoxId: 'Order Date',
    ownerEmail: 'Order By',
    locationLatitude: 'Payment Status',
  };

  const goToOrdersPage=()=>{
    navigate('/farmer/make/orders');
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className='flex flex-col p-2 gap-2'>
      <DashboardHeader headerTitle={'Orders'} subTitle={'All Orders'} />
      <Filter           
          title="Orders"
          number={0}
          url={'orders'}
          openCloseModal={()=>{}}
          otherButton={goToOrdersPage}/>
      <div className='relative'>
      <div className="sticky top-0 bg-white shadow-md z-10">
          <DataTable
              data={orders}
              columns={ordersColumns}
              labels={ordersLabels}
            />
          </div>
      </div>
    </div>
  )
}

export default Orders
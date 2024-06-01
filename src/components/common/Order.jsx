import React,{useEffect,useState} from 'react'
import OrderProductCard from './Cards/OrderProductCard'
import { getAllProducts } from '../../api/product'
import DashboardHeader from '../ui/DashboardHeader'


const Order=()=> {
  const [products,setProducts] =useState([]);
  const fetchProucts =async()=>{
    const res =  await getAllProducts();
    setProducts(res)
  }

  const addToCart = (item)=>{
  }

  useEffect(() => {
    fetchProucts()
  }, [])
  return (
    <div className='flex flex-col p-2 gap-2'>
      <DashboardHeader headerTitle={'New'} subTitle={'Order'} />
      <div className='flex flex-wrap justify-center gap-4'>
        {products.map((el,index) => (
          <OrderProductCard key={index} item={el} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default Order

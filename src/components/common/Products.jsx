import React, {useEffect, useState} from 'react'
import { getAllProducts } from '../../api/product'
import ProductCard from './Cards/ProductCard'
import DashboardHeader from '../ui/DashboardHeader'

const Products=()=> {
  const [products, setProducts] = useState([]);
  const allProducts = async()=>{
    const res =  await getAllProducts();
    setProducts(res)
  }

  useEffect(() => {
    allProducts();
  }, [])
  return (
    <div className='flex flex-col p-2 gap-2'> 
      <DashboardHeader headerTitle={'Products'} subTitle={'All Products'} />
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((el,index) => (
          <ProductCard key={index} item={el} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default Products;
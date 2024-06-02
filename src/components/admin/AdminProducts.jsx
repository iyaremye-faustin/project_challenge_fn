import React, { useState, useEffect } from 'react';
import Filter from './parts/Filter';
import DataTable from '../ui/DataTable';
import Spinnar from '../reusable/Spinnar';
import useAppStore from '../store/AppStore';
import DashboardHeader from '../ui/DashboardHeader';
import { getAllProducts, saveProduct,getProductsByCategory } from '../../api/product';
import AddProduct from '../Modals/AddProduct';
import AddSeedProduct from '../Modals/AddSeedProduct';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useAppStore((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [newItemForm, setShowNewForm] = useState(false);
  const [newSeedItemForm, setShowNewSeedForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [fertlizers,setFertilizers] = useState([]);

  useEffect(() => {
    allProducts();
    getFertlizers();
  }, [currentPage, pageSize]);

  const productsColumns = ['product_id', 'name', 'price', 'category','quantity_per_acre'];

  const productsLabels = {
    product_id: 'Product Id',
    name: 'Product Name',
    price: 'Price',
    category: 'Category',
    quantity_per_acre:'Quantity Per Acre'
  };

  const getFertlizers = async()=>{
    setLoading(true)
    const res = await getProductsByCategory(1);
    setFertilizers(res)
    setLoading(false)
  }
  const actions = [
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  const openNewModal = () => {
    setShowNewForm(!newItemForm);
  };

  const openSeedNewModal = () => {
    setShowNewSeedForm(!newSeedItemForm);
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const res = await saveProduct(formData);
    if (res.status) {
      setShowNewSeedForm(false);
      setShowNewForm(false);
    }
  };

  const allProducts = async () => {
    setLoading(true);
    const res = await getAllProducts();
    setTotalItems(res.length)
    setPageSize(res.length);
    const formattedProducts = res.map((val) => {
      val.category = val.category ? val.category.name : '';
      return val;
    });
    setProducts(formattedProducts);
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col p-2 gap-2 ">
        <DashboardHeader headerTitle={'Products'} subTitle={'All'} />
        <Filter
          title="Products"
          number={totalItems}
          url={'products'}
          openCloseModal={openNewModal}
          otherButton={openSeedNewModal}
        />
        <div className="relative">
          <div className="sticky top-0 bg-white shadow-md z-10">
            <DataTable
              data={products}
              columns={productsColumns}
              labels={productsLabels}
              actions={actions}
              totalItems={totalItems}
              currentPage={1}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>
          {newItemForm && (
            <div className="w-full h-full p-4 fixed top-0 z-40 right-0">
              <AddProduct closeModal={openNewModal} updateFormData={updateFormData} handleRegister={handleSubmitProduct}/>
            </div>
          )}
          {!loading && newSeedItemForm && (
            <div className="w-full h-full p-4 fixed top-0 z-40 right-0">
              <AddSeedProduct
                closeModal={openSeedNewModal}
                updateFormData={updateFormData}
                handleRegister={handleSubmitProduct}
                fertilizers={fertlizers}
              />
            </div>
          )}
          {loading && <Spinnar />}
        </div>
      </div>
    </>
  );
};

export default AdminProducts;

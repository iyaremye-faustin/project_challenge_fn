import React, { useState, useEffect } from 'react';
import Filter from './parts/Filter';
import DataTable from '../ui/DataTable';
import Spinnar from '../reusable/Spinnar';
import useAppStore from '../store/AppStore';
import DashboardHeader from '../ui/DashboardHeader';
import { getAllProducts, saveProduct, getProductsByCategory } from '../../api/product';
import AddProduct from '../Modals/AddProduct';
import AddSeedProduct from '../Modals/AddSeedProduct';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [newItemForm, setShowNewForm] = useState(false);
  const [newSeedItemForm, setShowNewSeedForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [fertlizers, setFertilizers] = useState([]);
  const {
    loading,
    setLoading,
    pageSize,
    currentPage,
    setCurrentPage,
    setLastPage,
    totalPages,
    setTotalPages
  } = useAppStore((state) => state);

  useEffect(() => {
    allProducts();
    getFertlizers();
  }, [currentPage, pageSize]);

  const productsColumns = ['product_id', 'name', 'price', 'category', 'quantity_per_acre'];

  const productsLabels = {
    product_id: 'Product Id',
    name: 'Product Name',
    price: 'Price',
    category: 'Category',
    quantity_per_acre: 'Quantity Per Acre'
  };

  const getFertlizers = async () => {
    setLoading(true);
    const res = await getProductsByCategory(1);
    setFertilizers(res);
    setLoading(false);
  };
  const actions = [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      allProducts();
    }
  };

  const allProducts = async () => {
    setLoading(true);
    const res = await getAllProducts(currentPage, pageSize);
    if (res) {
      const { count, products } = res;
      setTotalItems(count);
      setLastPage(count);
      const formattedProducts = products.map((val) => {
        val.category = val.category ? val.category.name : '';
        return val;
      });
      const totalPages = Math.ceil(count / pageSize);
      setTotalPages(totalPages);
      setProducts(formattedProducts);
    }
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
              currentPage={currentPage}
              pageSize={pageSize}
              lastPage={totalPages}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageChange}
            />
          </div>
          {newItemForm && (
            <div className="w-full h-full p-4 fixed top-0 z-40 right-0">
              <AddProduct
                closeModal={openNewModal}
                updateFormData={updateFormData}
                handleRegister={handleSubmitProduct}
              />
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

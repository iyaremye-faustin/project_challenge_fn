import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Filter from './parts/Filter';
import { getAllUsers, getRoles, changeRole } from '../../api/users';
import { notificationErrorStyles } from '../constants/app';
import DataTable from '../ui/DataTable';
import Spinnar from '../reusable/Spinnar';
import ChangeUserRole from '../Modals/ChangeUserRole';

const Accounts = () => {
  const [changeRoleModal, setChangeRoleModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selected,setSelected] = useState({})
  const [roles,setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const openChangeRole = (user) => {
    setSelected(user)
    setChangeRoleModal(!changeRoleModal);
  };


  const processUsers = (users) => {
    const formattedUsers = users.map((val) => {
      val.role = val.role ? val.role.role_name:'';
      return val;
    });
    setUsers(formattedUsers);
    setLoading(false);
  };

  const getUsers = async () => {
    const res = await getAllUsers();
    if (res) {
      processUsers(res.users)
      setTotalItems(res.count)
    }
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const updateUserHandler = async (e) => {
    e.preventDefault()
    const res = await changeRole({role_name: formData.role_name, user_id: selected.user_id});
    if (res) {
      toast.success('User updated successfully');
      setChangeRoleModal(false);
      getUsers();
    } else {
      toast.error('Unable to update user', {
        className: notificationErrorStyles
      });
    }
  };
  
  const fetchRoles =async()=>{
    const res = await getRoles();
    setRoles(res)
  }

  useEffect(() => {
    getUsers();
    fetchRoles();
  }, []);

  const usersColumns = ['user_id', 'full_name', 'phone_number', 'email', 'phoneNumber', 'enabled', 'role'];

  const usersLabels = {
    user_id: 'ID',
    full_name: 'Names',
    email: 'Email Address',
    phone_number: 'Telphone',
    role: 'Status',
    role: 'Role'
  };

  const actions = [
    {
      label: 'ChangeRole',
      onClick: (row) => {
        openChangeRole(row);
      }
    }
  ];

  return (
    <div className="flex flex-col p-2 gap-2 ">
      <div className="flex flex-row gap-2">
        <span className="text-semiText text-[14px] font-[400]">Dashboard</span>
        <span className="text-main text-[14px] font-[500]">/ Accounts </span>
      </div>
      <Filter
        title="Accounts"
        number={users.length}
        url=""
        openCloseModal={''}
        newAccountModal={''}
      />
      {changeRoleModal && selected && (
        <div className="w-full h-full p-4 fixed top-0  right-0">
          <ChangeUserRole
            roles={roles}
            updateFormData={inputChange}
            handleRegister={updateUserHandler}
            closeModal={()=>setChangeRoleModal()}
          />
        </div>
      )}
      <div className="bg-gray-700">
        <DataTable data={users} columns={usersColumns} labels={usersLabels} actions={actions}    
             currentPage={currentPage}
              totalItems={totalItems}
              pageSize={pageSize}
            />
      </div>
      {loading && <Spinnar />}
    </div>
  );
};

export default Accounts;

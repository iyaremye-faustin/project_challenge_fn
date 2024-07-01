import { create } from 'zustand';

const useAppStore = create((set) => ({
  dataTable: [],
  currentPage: 1,
  totaItems: 0,
  pageSize: 10,
  lastPage: 0,
  totalPages: 0,
  user: {},
  loading: false,
  modalName: '',
  cartItems: [],
  setModal: (modal) => set({ modalName: modal }),
  setUser: (data) => set({ user: data }),
  setLoading: (status) => set({ loading: status }),
  setDataTable: (data) => set({ dataTable: data }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalItems: (total) => set({ totaItems: total }),
  setPageSize: (size) => set({ pageSize: size }),
  setLastPage: (size) => set({ lastPage: size }),
  setCartItems: (data) => set({ cartItems: data }),
  setTotalPages: (total) => set({ totalPages: total })
}));

export default useAppStore;

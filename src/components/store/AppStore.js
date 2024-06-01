import { create } from 'zustand'

const useAppStore = create((set) => ({
  dataTable: [],
  currentPage:1,
  user:{},
  loading:false,
  modalName:'',
  cartItems:[],
  setModal:(modal)=>set({modalName:modal}),
  setUser: (data)=>set({user: data}),
  setLoading: (status)=>set({loading: status}),
  setDataTable: (data) => set({ dataTable: data }),
  setCurrentPage:(page)=>set({currentPage: page}),
  setCartItems:(data)=>set({cartItems: data})
}));

export default useAppStore

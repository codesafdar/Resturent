import orderService from '@/config/api/order';
import ProductService from '@/config/api/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  cartitem: [],
};
console.log("data slice >>>>>>>>>>>>>>>>..", initialState.cartitem);
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getcartListSuccess(state, { payload }) {
        state.cartitem = state.cartitem.concat(payload);
  },
    hasError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default cartSlice.reducer;
export const {
  getcartListSuccess,
  hasError,
} = cartSlice.actions;

export const fetchcartList = (data) => async (dispatch) => {
  try {
    // Assuming data is the correct payload you want to set for cartitem
    dispatch(getcartListSuccess(data));
  } catch (error) {
    dispatch(hasError(error));
  }
};
// import orderService from '@/config/api/order';
import orderService from '@/config/api/order';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  orderlist: [],
};
const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    getorderListSuccess(state, { payload }) {
      state.orderlist = payload;
    },
    hasError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default orderSlice.reducer;
export const {
  setLoading,
  getorderListSuccess,
  hasError,
} = orderSlice.actions;

// Async Thunks for fetching data

export const fetchOrderList = () => async (dispatch) => {
  try {
    const response = await orderService.getOrderList();
    console.log("🚀 ~ file: order.js:35 ~ fetchOrderList ~ response:", response)
    dispatch(getorderListSuccess(response.data));
  } catch (error) {
    dispatch(hasError(error));
  }
};

import orderService from '@/config/api/order';
import ProductService from '@/config/api/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  popularProduct: [],
  orderlist: [],
};
console.log("data slice >>>>>>>>>>>>>>>>..", initialState.popularProduct);
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // setLoading(state, { payload }) {
    //   state.isLoading = payload;
    // },
    getPopularProductSuccess(state, { payload }) {
        state.popularProduct = payload;
      },
    getorderListSuccess(state, { payload }) {
        state.orderlist = payload;
    },
    hasError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;
export const {
//   setLoading,
  getPopularProductSuccess,
  hasError,
} = productSlice.actions;

// Async Thunks for fetching data

export const fetchPopularProduct = (id) => async (dispatch) => {
    try {
      const response = await ProductService.getPapolerProduct(id);
    //   console.log("Popular Product Response", response); // Check response in console
      dispatch(getPopularProductSuccess(response.data.products));
    } catch (error) {
      dispatch(hasError(error));
    }
};
export const fetchOrderList = () => async (dispatch) => {
  try {
    const response = await orderService.getOrderList();
    console.log("🚀 ~ file: order.js:35 ~ fetchOrderList ~ response:rrrrrrrrrrrrrrrrrrrrr", response)
    dispatch(getPopularProductSuccess(response.data));
  } catch (error) {
    dispatch(hasError(error));
  }
};
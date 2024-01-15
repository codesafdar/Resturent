import orderService from '@/config/api/order';
import ProductService from '@/config/api/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  cartitem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getcartListSuccess(state, { payload }) {
      state.cartitem = state.cartitem.concat(payload);
    },
    diccartListSuccess(state, { payload }) {
      // Find the index of the first occurrence of the item with the specified id
      const indexToRemove = state.cartitem.findIndex(item => item.id === payload.id);

      // Remove the item if found
      if (indexToRemove !== -1) {
        state.cartitem.splice(indexToRemove, 1);
      }
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
  diccartListSuccess,
  hasError,
} = cartSlice.actions;

export const fetchcartList = (data) => async (dispatch) => {
  try {
    dispatch(getcartListSuccess(data));
  } catch (error) {
    dispatch(hasError(error));
  }
};

export const dicscartList = (data) => async (dispatch) => {
  try {
    dispatch(diccartListSuccess(data));
  } catch (error) {
    dispatch(hasError(error));
  }
};

import categoryService from '@/config/api/category';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  categoriesAllProducts: [],
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategoriesAllProductsSuccess(state, { payload }) {
      state.categoriesAllProducts = payload;
    },
    hasError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default categorySlice.reducer;
export const {
  setLoading,
  getCategoriesAllProductsSuccess,
  hasError,
} = categorySlice.actions;

// Async Thunks for fetching data

export const fetchCategoriesAllProducts = (id) => async (dispatch) => {
  try {
    const response = await categoryService.getCategoryProduct(id);
    dispatch(getCategoriesAllProductsSuccess(response.data)); // Assuming response contains category products data
  } catch (error) {
    dispatch(hasError(error));
  }
};

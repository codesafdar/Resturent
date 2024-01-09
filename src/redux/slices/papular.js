
import ProductService from '@/config/api/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
    popularProducts: [],
};
const papularSlice = createSlice({
    name: 'papular',
    initialState,
    reducers: {
        getPopularProductSuccess(state, { payload }) {
            state.popularProducts = payload;
        },
        hasError(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export default papularSlice.reducer;
export const {
    setLoading,
    getPopularProductSuccess,
    hasError,
} = papularSlice.actions;

// Async Thunks for fetching data

export const fetchPopularProduct = (id) => async (dispatch) => {
    try {
        const response = await ProductService.getPapolerProduct(id);
        console.log("🚀 ~ file: papular.js:36 ~ fetchPopularProduct ~ response:rrrrrr", response.data.products)
        dispatch(getPopularProductSuccess(response.data.products));
    } catch (error) {
        dispatch(hasError(error));
    }
};

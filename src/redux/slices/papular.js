
import ProductService from '@/config/api/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
    popularProducts: [],
    recomendedProducts: [],
    beveregeProducts: [],
};
const papularSlice = createSlice({
    name: 'papular',
    initialState,
    reducers: {
        getPopularProductSuccess(state, { payload }) {
            state.popularProducts = payload;
        },
        getrecomendedProductSuccess(state, { payload }) {
            state.recomendedProducts = payload;
        },
        getbeverageProductSuccess(state, { payload }) {
            state.beveregeProducts = payload;
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
    getrecomendedProductSuccess,
    getbeverageProductSuccess,
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
export const fetchRecomendedProduct = (id) => async (dispatch) => {
    try {
        const response = await ProductService.getRecomendedProduct(id);
        console.log("🚀 ~ file: papular.js:36 ~ fetchPopularProduct ~ response:rrrrrr", response.products)
        dispatch(getrecomendedProductSuccess(response.data));
    } catch (error) {
        dispatch(hasError(error));
    }
};
export const fetchBeverageProduct = (id) => async (dispatch) => {
    try {
        const response = await ProductService.getBeverageProduct(id);
        console.log("🚀 ~ file: papular.js:36 ~ fetchPopularProduct ~ response:rrrrrr", response.products)
        dispatch(getbeverageProductSuccess(response.data));
    } catch (error) {
        dispatch(hasError(error));
    }
};
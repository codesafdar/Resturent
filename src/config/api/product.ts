import { get } from "@/services/restService";
import { ENDPOINTS } from "../constant/endPoints";

const ProductService = {
  getAllProducts: (id: string) => {
    return get(`${ENDPOINTS.GET_ALL_POPULAR_PRODUCT}=${id}`);
  },
  // getSingleProduct: (id: string) => {
  //   return get(`${GET_ALL_PRODUCTS_ENDPOINT}/${id}`);
  // },
  getPapolerProduct: (id: string) => {
    return get(`${ENDPOINTS.GET_POPULAR_PRODUCT}=${id}`); 
  },
  getAllCategoriesAllProduct: (id: string) => {
    return get(`${ENDPOINTS.GET_CATEGORY_ALL_PRODUCT}=${id}`);
  },
  // getCategoryProduct: (category: string) => {
  //   return get(`${GET_CATEGORY_PRODUCT_ENDPOINT}/${category}`);
  // },
  // getProductBySearch: (title: string) => {
  //   return get(`${GET_ALL_PRODUCTS_ENDPOINT}/search?q=${title}`);
  // },
};
export default ProductService;

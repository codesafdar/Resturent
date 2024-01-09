import { ENDPOINTS } from "../constant/endPoints";
import { get } from "@/services/restService";

const ProductService = {
  getAllProducts: (id) => {
    return get(`${ENDPOINTS.GET_ALL_POPULAR_PRODUCT}=${id}`);
  },
  // getSingleProduct: (id: string) => {
  //   return get(`${GET_ALL_PRODUCTS_ENDPOINT}/${id}`);
  // },
  getPapolerProduct: (id) =>  {
    return get(`${ENDPOINTS.GET_POPULAR_PRODUCT}=${id}`); 
  },
  getAllCategoriesAllProduct: (id) => {
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

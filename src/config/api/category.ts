import { get } from "@/services/restService";
import { CATEGORY_ENDPOINT } from "../constant/endPoints";

const categoryService = {
  getCategoryProduct: (category: string) => {
    return get(`${CATEGORY_ENDPOINT.GET_CATEGORY_ALL_PRODUCTS}${category}`);
  },
};
export default categoryService;

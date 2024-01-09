import { get } from "@/services/restService";
import { ORDERED_ENDPOINT } from "../constant/endPoints";

const orderService = {
  getOrderList: () => {
    return get(`${ORDERED_ENDPOINT.GET_ORDER_LIST}`);
  },
};
export default orderService;

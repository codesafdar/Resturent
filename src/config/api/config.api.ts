

import { get } from "@/services/restService";
import { ENDPOINTS } from "../constant/endPoints";

  const ConfinServices = {
    getConfigData: (id: string) => {
      return get(`${ENDPOINTS.GET_CONFIG}=${id}`);
    },
  };
  export default ConfinServices;
  
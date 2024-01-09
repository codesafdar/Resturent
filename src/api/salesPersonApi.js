import { get, post } from "src/services/restService"

export const addSalesPersonApi = (data) => {
    return post('sales-person/add', data)
}
export const getAllSalesPersonsApi = () => {
    return get('sales-person/getAll')
}
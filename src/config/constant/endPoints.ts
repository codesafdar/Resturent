//* Auth endpoints

const CONFIG_BASE_URL = "/api/v1/";
const API_PRODUCT_BASE_URL = "/api/v1/products/";
const API_CATEGORY_BASE_URL = "/api/v1/categories/";
const API_ORDER_BASE_URL = "/api/v1/customer/order/";
export const LOGIN_ENDPOINT = "/api/v1/auth/login";
export const SIGNUP_ENDPOINT = "/api/v1/auth/registration";
export const CHECKPHONE_ENDPOINT = "/api/v1/auth/check-phone";
export const ENDPOINTS = {
  // config ENDPOINT
  GET_CONFIG: `${CONFIG_BASE_URL}config?restaurant_id`,
  // produnt ENDPOINT
  GET_ALL_PRODUCTS: `${API_PRODUCT_BASE_URL}`,
  GET_ALL_CATEGORIES: `${API_PRODUCT_BASE_URL}categories`,
  GET_CATEGORY_PRODUCT: `${API_PRODUCT_BASE_URL}products/category`,
  GET_CATEGORY_ALL_PRODUCT: `${CONFIG_BASE_URL}products/category`,
  GET_POPULAR_PRODUCT: `${API_PRODUCT_BASE_URL}popular?restaurant_id`,
  GET_ALL_POPULAR_PRODUCT: `${API_PRODUCT_BASE_URL}allpopular?restaurant_id`,
  GET_LATEST_PRODUCT: `${API_PRODUCT_BASE_URL}latest?restaurant_id`,
  GET_LOYALTY_REWARD: `${API_PRODUCT_BASE_URL}loyalty-rewards?restaurant_id`,
  GET_BEVERAGES: `${API_PRODUCT_BASE_URL}getBeverages?restaurant_id`,
  GET_RECOMMENDED_BEVERAGES: `${API_PRODUCT_BASE_URL}get_recomended_beverages?restaurant_id`,
  GET_RECOMMENDED_SIDE: `${API_PRODUCT_BASE_URL}get_recomended_sides?restaurant_id`,
  GET_PRODUCT_MENU: `${API_PRODUCT_BASE_URL}set-menu?restaurant_id`,
  GET_PRODUCT_BY_CATEGORY: `${API_PRODUCT_BASE_URL}set-menu?restaurant_id`,
  GET_PRODUCT_BY_ID: `${API_PRODUCT_BASE_URL}details`,
  GET_PRODUCT_SEARCH: `${API_PRODUCT_BASE_URL}search?restaurant_id=&name`,
  GET_RELATED_PRODUCT: `${API_PRODUCT_BASE_URL}related-products/?id?restaurant_id`,
  GET_PRODUCT_REVIEWS: `${API_PRODUCT_BASE_URL}reviews/?id?restaurant_id`,
  GET_PRODUCT_RATING: `${API_PRODUCT_BASE_URL}rating/?id?restaurant_id`,
  
};

export const CATEGORY_ENDPOINT = {

    GET_ALL_CATEGORY: `${CONFIG_BASE_URL}categories?restaurant_id`,
    GET_CATEGORY_ALL_PRODUCTS: `${API_CATEGORY_BASE_URL}allproducts/`,
    GET_CATEGORY_BY_CHILD: `${API_CATEGORY_BASE_URL}childes/?id?restaurant_id`,
    GET_CATEGORY_BY_PRODUCT: `${API_CATEGORY_BASE_URL}products/?id?restaurant_id`,

}

export const OFFERS_ENDPOINT = {

    GET_SPECIAL_OFFERS: `${CONFIG_BASE_URL}special-offer?restaurant_id`,
    GET_CATEGORY_OFFERS: `${CONFIG_BASE_URL}/special-offer/get_catering_offers/?restaurant_id`
  
}
export const NOTIFICATION_ENDPOINT = {

    GET_SPECIAL_OFFERS: `${CONFIG_BASE_URL}notifications?restaurant_id`,
  
}
export const ORDERED_ENDPOINT = {

    GET_ORDER_LIST: `${API_ORDER_BASE_URL}list`,
    GET_ORDER_DETAIL: `${API_ORDER_BASE_URL}details?order_id`,
    POST_ORDER: `${API_ORDER_BASE_URL}place`,
    CANCEL_ORDER: `${API_ORDER_BASE_URL}cancel?order_id`,
    GET_ORDER_TRACK: `${API_ORDER_BASE_URL}track?order_id`,
    GET_ORDER_PAYMENT: `${API_ORDER_BASE_URL}payment-method?order_id`,
  
}
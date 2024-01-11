import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import ordersReducer from './slices/orderSlice'
import userReducer from './slices/user';
import productReducer from './slices/product';
import categoryReducer from './slices/category';
import papularReducer from './slices/papular';
import cartReducer from './slices/cart';
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const userPersistConfig = {
  key: 'user',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['token', 'userInfo'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  orderData: ordersReducer,
  product: productReducer,
  category: categoryReducer,
  papular: papularReducer,
  cart: cartReducer
});

export { rootPersistConfig, rootReducer };

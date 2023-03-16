import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user.slice';
import basketReducer from './basket.slice';
import {persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  basket: basketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);

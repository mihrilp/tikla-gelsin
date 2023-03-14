import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user.slice';
import {persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
  },
});

export default store;
export const persistor = persistStore(store);

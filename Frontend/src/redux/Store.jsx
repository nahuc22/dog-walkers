// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage para Expo
import { combineReducers } from 'redux';
import loginReducer from './slices/loginSlice'; // Importa tu slice
import themeReducer from './slices/themeSlice'

// Configuración de redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'theme'], // Solo persiste el estado de 'user'
};

const rootReducer = combineReducers({
  login: loginReducer,
  theme: themeReducer // Puedes agregar más slices aquí
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necesario para Redux Persist
    }),
});

export const persistor = persistStore(store);
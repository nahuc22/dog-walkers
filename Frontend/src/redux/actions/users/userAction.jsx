import { createAsyncThunk } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../../utils/Toast';


export const login = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch('http://192.168.100.155:3001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Error en las credenciales');
      }

      const data = await response.json();

      Toast.show({
        type: 'success',
        text1: '¡Inicio de sesión exitoso!',
        text2: 'Bienvenido a la aplicación 🚀',
        visibilityTime: 2000,
        autoHide: true,
        ...toastConfig.success
      });

      return data;

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error al iniciar sesión',
        visibilityTime: 2000, // Tiempo en milisegundos (2 segundos)
        autoHide: true,
        ...toastConfig.error,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (formValues, { rejectWithValue }) => {
    try {
      const response = await fetch('http://192.168.100.155:3001/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar');
      }
      Toast.show({
        type: 'register',
        text1: '¡Registro realizado correctamente!',
        text2: 'Ahora puedes iniciar sesión 🚀',
        visibilityTime: 2000,
        autoHide: true,
        ...toastConfig.register
      });

      return await response.json();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error al registrarse',
        visibilityTime: 2000, // Tiempo en milisegundos (2 segundos)
        autoHide: true,
        ...toastConfig.error,
      });
      return rejectWithValue(error.message || 'Error desconocido');
    }
  }
);
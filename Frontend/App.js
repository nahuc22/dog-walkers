import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/Store';
import AppNavigator from './src/navigation/AppNavigator.js';
import { ActivityIndicator} from 'react-native'
import FontLoader from './src/components/FontLoader.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <FontLoader>
          <AppNavigator />  
        </FontLoader>
      </PersistGate>
    </Provider>
  );
}
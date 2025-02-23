// AppNavigator.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundry from '../ErrorBoundry/index.js';
import TabCreator from './TabCreator.js'
import RouterList from './RouterList.js';
import { LogBox } from 'react-native';

// LogBox.ignoreAllLogs();
export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <ErrorBoundry>
        {isLoggedIn ? (
          <TabCreator setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <RouterList setIsLoggedIn={setIsLoggedIn} />
        )}
      </ErrorBoundry>
    </NavigationContainer>
  );
}

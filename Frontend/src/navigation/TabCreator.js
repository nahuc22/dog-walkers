import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Home from '../screens/Home'
import Inbox from '../screens/Inbox'

const Tab = createBottomTabNavigator();

// Definir las rutas de las pestañas

export default function TabCreator({ setIsLoggedIn }) {
  const TabRoutes=[
    {
        name: 'Home',
        component: (props) => <Home {...props} setIsLoggedIn={setIsLoggedIn}/>,
        options: {
            tabBarLabel: 'Home',
            tabBarIcon: (props) => <CustomIcon props={props} iconName="home"/>
        },
        header: () => <CustomHeader/>
    },
    {
        name: 'Inbox',
        component: (props) => <Inbox {...props} setIsLoggedIn={setIsLoggedIn}/>,
        options: {
            tabBarLabel: 'Inbox',
            tabBarIcon: (props) => <CustomIcon props={props} iconName="chat"/>
        },
        header: () => <CustomHeader/>
    }
  ]
  return (
    <Tab.Navigator 
        screenOptions={{
          tabBarLabel: '',
          tabBarStyle: {
            display: 'flex', // Otras opciones de estilo para la barra de pestañas
          },
          // Otras opciones de configuración para las pantallas
        }}
      >
      {TabRoutes.map(({ name, component, options }, index) => (
        <Tab.Screen
          key={name} // Es preferible usar el nombre de la ruta como clave en lugar de índice
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
}

const CustomIcon = ({props , iconName, animationProps})  => {
  const { focused } = props
  return (
      <Animatable.View 
          {...animationProps}
          style={{padding: scale(10),
          height: scale(70),
          width: scale(70),
          justifyContent: 'center',
          alignItems: 'center'
          }}>
      <View
      style={[{
          borderRadius:scale(20),
      }, focused? {} : { opacity: scale(0.4)}]}>
      <MaterialIcons
          name={iconName ? iconName: 'home'}
          size={scale(32)}
          {...props}
      />
      </View>
      </Animatable.View>
  )
}
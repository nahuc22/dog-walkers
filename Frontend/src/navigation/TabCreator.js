import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { View } from 'react-native';
import Home from '../screens/Home';
import Inbox from '../screens/Inbox';
import ScheduleScreen from '../screens/Schedule';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabCreator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" options={{ headerShown: false }}>
        {() => <TabNavigator setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator({ setIsLoggedIn }) {
  const HomeWrapper = (props) => <Home {...props} setIsLoggedIn={setIsLoggedIn} />;
  const InboxWrapper = (props) => <Inbox {...props} setIsLoggedIn={setIsLoggedIn} />;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'flex' },
        headerShown: false, // Opcional: Si no necesitas encabezado
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props) => <CustomIcon props={props} iconName="home" />,
        }}
      >
        {(props) => <HomeWrapper {...props} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Inbox"
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: (props) => <CustomIcon props={props} iconName="chat" />,
        }}
      >
        {(props) => <InboxWrapper {...props} />}
      </Tab.Screen>
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
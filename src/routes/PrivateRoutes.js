import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomStatusBar from '../components/StatusBar';
import ListNews from '../pages/ListNews';
import Profile from '../pages/Profile';
import AddNews from '../pages/AddNews';

const {Navigator, Screen} = createBottomTabNavigator();

const PrivateRoutes = () => {
  return (
    <NavigationContainer>
      <CustomStatusBar />
      <Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 64,
          },
          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: '#ebebf5',
          inactiveTintColor: '#c1bccc',
          activeTintColor: '#367dd9',
          iconStyle: {
            flex: 0,
            width: 24,
            height: 24,
          },
        }}>
        <Screen
          name="ListNews"
          component={ListNews}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({size, color}) => (
              <Icon name="ios-home-sharp" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="+"
          component={AddNews}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({size, color}) => (
              <Icon name="ios-add-circle-sharp" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({size, color}) => (
              <Icon name="ios-person-sharp" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default PrivateRoutes;

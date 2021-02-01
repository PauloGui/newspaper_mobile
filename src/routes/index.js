import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="PrivateRoute" component={SignUp} />
        <Auth.Screen name="PublicRoute" component={SignIn} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;

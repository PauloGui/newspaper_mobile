import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const {Navigator, Screen} = createStackNavigator();

const PrivateRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {/* <Screen name="SignIn" component={SignIn} /> */}
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
};

export default PrivateRoutes;

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    zIndex: 2,
    padding: 10,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'cover',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/logo.png')} />
    </View>
  );
};

export default Header;

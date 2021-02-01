import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #f9fafc;

  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  padding: 10px;
  font-size: 18px;
  margin-top: 50px;
`;

export const Img = styled.Image`
  height: 80px;
  width: 250px;
`;

export const CreatAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  border-top-width: 1px;
  border-color: #ccc;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
`;

export const CreatAccountButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

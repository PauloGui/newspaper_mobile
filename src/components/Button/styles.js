import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Container = styled(RectButton)`
  height: 60px;
  width: 100%;
  background-color: #367dd9;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
`;

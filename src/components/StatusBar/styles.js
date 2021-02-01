import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const StatusBarCustom = styled.StatusBar``;

export const Container = styled.View`
  height: ${getStatusBarHeight()}px;
  background-color: #f9fafc;
`;

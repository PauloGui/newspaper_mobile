import React from 'react';
import {StatusBarCustom, Container} from './styles';

const CustomStatusBar = () => (
  <Container>
    <StatusBarCustom
      translucent
      backgroundColor="#f9fafc"
      barStyle="dark-content"
    />
  </Container>
);

export default CustomStatusBar;

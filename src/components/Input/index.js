import React from 'react';

import {Container, TextInput} from './styles';

const Input = ({name, ...rest}) => {
  return (
    <Container>
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;

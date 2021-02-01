import React, {Fragment} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Img,
  Title,
  CreatAccountButton,
  CreatAccountButtonText,
} from './styles';

const SignIn = () => {
  return (
    <Fragment>
      <Container>
        <Img source={require('../../assets/logo.png')} />
        <Title>Faça login para continuar</Title>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
      </Container>
      <CreatAccountButton>
        <CreatAccountButtonText>Criar conta</CreatAccountButtonText>
      </CreatAccountButton>
    </Fragment>
  );
};

export default SignIn;

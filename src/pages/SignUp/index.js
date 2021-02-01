import React, {Fragment} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container, Img, Title} from './styles';

const SignUp = () => {
  return (
    <Fragment>
      <Container>
        <Img source={require('../../assets/logo.png')} />
        <Title>Faça seu cadastro e tenha acesso a milhares de notícias.</Title>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Digite a senha" />
        <Input placeholder="Confirme a senha" />
        <Button>Salva</Button>
      </Container>
    </Fragment>
  );
};

export default SignUp;

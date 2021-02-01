import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {Container, ImgNews, Content, Title, Input} from './styles';

const ListNews = () => {
  return (
    <Fragment>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <Input placeholder="Buscar notícia" />
          <Container>
            <Title>Where does it come from?</Title>
            <ImgNews source={require('../../assets/img-notice.png')} />
            <Content>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </Content>
          </Container>

          {/* Apagar tudo daqui pra baixo */}
          <Container>
            <Title>Where does it come from?</Title>
            <ImgNews source={require('../../assets/img-notice.png')} />
            <Content>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </Content>
          </Container>
          <Container>
            <Title>Where does it come from?</Title>
            <ImgNews source={require('../../assets/img-notice.png')} />
            <Content>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </Content>
          </Container>
          <Container>
            <Title>Where does it come from?</Title>
            <ImgNews source={require('../../assets/img-notice.png')} />
            <Content>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </Content>
          </Container>
          <Container>
            <Title>Where does it come from?</Title>
            <ImgNews source={require('../../assets/img-notice.png')} />
            <Content>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </Content>
          </Container>
          {/* Apagar até em cima na tag */}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default ListNews;

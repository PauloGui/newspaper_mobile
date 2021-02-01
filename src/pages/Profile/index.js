import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import CustomStatusBar from '../../components/StatusBar';
import {
  ProfileContainer,
  Img,
  ContentProfile,
  ProfileName,
  ProfileEmail,
  TextButton,
  ButtonEdit,
  Container,
  ImgNews,
  Content,
  Title,
} from './styles';

const Profile = () => {
  return (
    <Fragment>
      <CustomStatusBar />

      <SafeAreaView>
        <ScrollView>
          <ProfileContainer>
            <Img source={require('../../assets/profile.jpg')} />
          </ProfileContainer>

          <ContentProfile>
            <ProfileName>Fantasma das noticias</ProfileName>
            <ProfileEmail>phantomnews@phantom.com</ProfileEmail>

            <ButtonEdit>
              <TextButton>Editar perfil</TextButton>
            </ButtonEdit>
          </ContentProfile>

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

          {/* Apagar tudo daqui pra cima */}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Profile;

import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f9fafc;
`;
export const Img = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: cover;

  border-radius: 75px;
  margin-top: 20px;
`;

export const ContentProfile = styled.View`
  padding: 0 30px;
  padding-bottom: 30px;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
  background-color: #f9fafc;
`;
export const ProfileName = styled.Text`
  padding-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const ProfileEmail = styled.Text`
  padding-top: 10px;
  font-size: 16px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  border: 1px;
  border-color: #ccc;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
`;

export const Container = styled.View`
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
`;

export const ImgNews = styled.Image`
  width: 100%;
  height: 250px;
  resize-mode: cover;
`;

export const Title = styled.Text`
  font-size: 18;
  font-weight: bold;
  padding: 20px 10px;
  text-align: justify;
  color: #367dd9;
`;

export const Content = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14;
  text-align: justify;
  padding: 10px;
`;
export const Input = styled.TextInput`
  flex: 1;
  padding: 0 10px;
  margin: 0 10px;
  margin-top: 10;
  height: 40px;
  background-color: #fff;
  color: #ccc;
`;

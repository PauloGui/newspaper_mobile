import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
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
  height: 45px;
  border: 1px;
  border-color: #ccc;
  background-color: #fff;
  color: #ccc;
  font-size: 16px;
`;

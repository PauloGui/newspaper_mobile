import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  padding: 0 16px;
  background-color: #eee;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#333',
})`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

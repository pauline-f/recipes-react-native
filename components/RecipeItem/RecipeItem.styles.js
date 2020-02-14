import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
	width: 100%;
	margin-top: 20px;
	padding-left: 20px;
  align-items: center;
`;

export const Img = styled.Image`
	width: 80px;
  height: 80px;
  border-color: grey;
  border-width: .5px;
  border-radius: 3px;
`;

export const Title = styled.Text`
	font-size: 20px;
  padding-left: 10px;
`;
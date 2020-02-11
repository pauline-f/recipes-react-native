import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
	width: 100%;
	margin-top: 30px;
	padding-left: 20px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 45px;
	height: 45px;
	background: black;
	border-radius: 22px;
  border: solid .8px green;
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: 500;
	color: green;
  padding-left: 10px;
`;
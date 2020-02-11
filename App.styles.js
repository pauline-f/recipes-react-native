import styled from 'styled-components';

export const Container = styled.View`
	flex: 1;
	background-color: white;
	align-items: center;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
	width: 100%;
	margin-top: 30px;
	padding-left: 20px;
`;

export const Logo = styled.Image`
  width: 50px;
	height: 50px;
	background: black;
	border-radius: 22px;
  border: solid 1px grey;
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: green;
`;
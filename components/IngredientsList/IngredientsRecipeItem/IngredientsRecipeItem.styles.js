import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
	width: 100%;
	margin-top: 20px;
  align-items: center;
`;

export const Img = styled.ImageBackground`
	width: 90%;
  height: 150px;
  margin: auto;
  border-color: grey;
  border-width: .5px;
  border-radius: 3px;
`;

export const Title = styled.Text`
	font-size: 17px;
  color: white;
  font-weight: bold;
`;

export const WrapperTitleButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: relative;
  top: 100px;
  justify-content: space-between;
  padding: 10px;
`;

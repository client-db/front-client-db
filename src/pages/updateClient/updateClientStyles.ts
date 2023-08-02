import styled from 'styled-components';

export const Main = styled.main`
	min-height: calc(100vh - 275px);
	max-width: 1100px;
	width: 100%;
	height: auto;
	margin: 20px auto 95px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Title = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 800;
	font-style: normal;
	color: #000000;
	text-transform: uppercase;
	text-align: center;
	font-size: 60px;
	height: 60px;
	margin: 50px 0 0 0;
`;
export const CardField = styled.div`
	gap: 20px;
	display: flex;
	max-width: 1200px;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;
export const Sticker = styled.div`
	height: 40px;
	background-color: #ffe5ed;
	border-radius: 7px;
	font-family: 'Montserrat', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #da3f3f;
	padding: 1px 5px;
	position: absolute;
	top: 165px;
	right: 0;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
`;
export const SubTitle = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-style: normal;
	color: #000000;
	text-transform: uppercase;
	text-align: center;
	font-size: 25px;
	margin: 40px auto 0px 0px;
`;
export const Hr = styled.hr`
	border: none;
	background: white;
	height: 2px;
	width: 100%;
	min-width: 670px;
	max-width: 1200px;
	margin-bottom: 20px;
`;

export const SubContainerTitle = styled(Title)`
	margin: 45px 0 0 0;
	font-size: 35px;
`;

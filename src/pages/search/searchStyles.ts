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

export const InputField = styled.div`
	display: flex;
	position: relative;
	height: auto;
	max-width: 590px;
	margin-top: 55px;
	width: 100%;
	align-items: center;
	& img {
		position: absolute;
		left: 7px;
		height: 45.75px;
	}
`;

export const Input = styled.input`
	width: calc(100% - 81.6px);
	padding: 18.5px 11.5px 18.5px 70px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 25px;
	background: rgb(235, 235, 235);
	color: rgb(0, 0, 0);
	box-shadow: inset 0 0 0 1px transparent;
	outline: none;
	border: none;
	border-radius: 10px;
	line-height: 31px;
`;

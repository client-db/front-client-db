import styled from 'styled-components';

export const Main = styled.div`
	display: flex;
	width: 100%;
	max-width: 710px;
	flex-wrap: wrap;
	gap: 15px;
	margin-top: 65px;
`;
export const Input = styled.input`
	width: calc(50% - 37.5px);
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 16px;
	background: rgb(235, 235, 235);
	color: rgb(0, 0, 0);
	box-shadow: inset 0 0 0 1px transparent;
	outline: none;
	border: none;
	padding: 15px;
	border-radius: 10px;
`;

export const Btn = styled.button`
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	background-color: black;
	color: white;
	font-weight: 600;
	border-radius: 10px;
	padding: 15px;
	user-select: none;
	border: none;
`;

import styled from 'styled-components';
export const InputField = styled.div`
	display: flex;
	position: relative;
	height: auto;
	max-width: 590px;

	margin-top: 55px;
	width: 100%;
	align-items: center;
	gap: 15px;
	& button:hover {
		background: rgb(242 242 242);
	}
`;
export const Input = styled.input`
	width: calc(100% - 81.6px);
	padding: 18.5px 11.5px 18.5px 18.5px;
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
export const Btn = styled.button`
	user-select: none;
	margin: 0;
	width: 68px;
	height: 68px;
	padding: 0 9.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(235, 235, 235);
	box-shadow: inset 0 0 0 1px transparent;
	outline: none;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	& img {
		position: relative;
		height: 45.75px;
	}
`;

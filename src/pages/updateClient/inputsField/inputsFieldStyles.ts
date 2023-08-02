import styled from 'styled-components';

interface IProp {
	datepicker?: boolean;
	loading?: boolean;
}

export const Main = styled.div`
	display: flex;
	width: 100%;
	max-width: 710px;
	flex-wrap: wrap;
	gap: 15px;
	margin-top: 35px;
	&& button:hover {
		transition: background-color 0.5s ease 0s;
		background-color: #00000085;
	}
`;
export const DatepickerContainer = styled.div`
	display: flex;
	width: calc(50% - 7.5px);
	position: relative;
	height: auto;
`;

export const Input = styled.input<IProp>`
	width: calc(50% - 37.5px);
	width: ${(props) => (props.datepicker ? '100%' : 'calc(50% - 37.5px)')};
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

export const Btn = styled.button<IProp>`
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	background-color: black;
	color: white;
	font-weight: 600;
	border-radius: 10px;
	padding: ${(props) => (props.loading ? '0' : '15px')};
	user-select: none;
	border: none;
	cursor: ${(props) => (props.loading ? 'no-drop' : 'pointer')};
	background-color: ${(props) => (props.loading ? '#00000085' : 'black')};
	svg {
		height: 50px;
		width: 50px;
	}
`;

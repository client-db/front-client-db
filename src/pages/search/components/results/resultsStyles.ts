import styled from 'styled-components';

interface IProps {
	checked?: boolean;
	seeMore?: boolean;
}
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

export const AllFiltersField = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const FilterField = styled.div`
	gap: 5px;
	display: flex;
	max-width: 590px;
	min-width: 590px;
	width: 100%;
	margin-top: 10px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Filter = styled.div<IProps>`
	cursor: pointer;
	padding: 10px;
	display: flex;
	font-size: 18px;
	font-family: 'Montserrat', sans-serif;
	background-color: white;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	border-radius: 10px;
	background-color: ${(props) => (props.checked ? '#000' : 'white')};
	color: ${(props) => (props.checked ? 'white' : '#000')};
	user-select: none;
	&:hover {
		background-color: ${(props) => (props.checked ? '#000' : '#f2f2f2')};
	}
`;

export const Btn = styled.button`
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

export const CardField = styled.div`
	gap: 20px;
	display: flex;
	max-width: 1200px;
	width: 100%;
	margin-top: 50px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

export const SeeMore = styled.button<IProps>`
	margin-top: 15px;
	border: none;
	border-radius: 6px;
	background-color: #fff;
	display: flex;
	padding: 5px;
	align-items: center;
	justify-content: center;
	user-select: none;
	outline: none;
	rotate: ${(props) => (props.seeMore ? '-180deg' : '0')};
	cursor: pointer;
	img {
		height: 20px;
	}
`;

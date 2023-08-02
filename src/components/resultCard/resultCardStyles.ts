import styled from 'styled-components';

interface IProps {
	seeMore?: boolean;
	delete?: boolean;
}

export const Card = styled.div<IProps>`
	position: relative;
	gap: 5px;
	display: flex;
	min-width: 300px;
	background-color: #fff;
	padding: 8px;
	flex-direction: column;
	border-radius: 12px;
	max-height: ${(props) => (props.seeMore ? 'auto' : '96px')};
`;

export const PropField = styled.div`
	font-family: 'Montserrat', sans-serif;
	display: flex;
	font-weight: 700;
	gap: 4px;
	text-transform: capitalize;
	p {
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
	}
`;

export const SeeMore = styled.button<IProps>`
	border: none;
	user-select: none;
	outline: none;
	display: ${(props) => (props.seeMore ? 'block' : 'none')};
	cursor: pointer;
	svg {
		height: 20px;
		width: 20px;
	}
`;

export const Delete = styled.div`
	z-index: 1;
	margin: 0 0 0 auto;
	height: 19px;
	width: 19px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
	svg {
		rotate: -90deg;
		height: 16px;
		width: 16px;
	}
`;

export const DeleteField = styled.div`
	position: absolute;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 16px;
	border: 1px solid #c9c9c9;
	top: -17px;
	right: -107px;
	user-select: none;
	background-color: white;
	padding: 6px 15px;
	border-radius: 5px;
	cursor: pointer;
`;

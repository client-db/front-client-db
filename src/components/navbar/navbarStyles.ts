import styled from 'styled-components';

export const Main = styled.div`
	z-index: 1;
	top: 0;
	position: sticky;
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
`;

export const LinkField = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const LinkItem = styled.p`
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 600;
	font-style: normal;
	line-height: 1.2;
	color: #cfbaf0;
	padding: 7px;
	cursor: pointer;
	&:hover {
		color: #fff;
		transition: color 0.5s ease 0s;
	}
	user-select: none;
`;

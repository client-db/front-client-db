import styled from 'styled-components';

export const Main = styled.footer`
	display: flex;
	height: 100px;
	width: 100%;
	background-color: black;
	align-items: center;
	justify-content: space-around;
	img {
		height: 43px;
		width: 43px;
		fill: #f1c0e8;
		cursor: pointer;
		& :hover {
			path {
				fill: white;
			}
		}
	}
`;

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
	margin-top: 50px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

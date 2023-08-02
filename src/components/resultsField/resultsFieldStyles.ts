import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
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

export const Title = styled.h1`
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

export const SubTitle = styled(Title)`
	margin: 45px 0 0 0;
`;

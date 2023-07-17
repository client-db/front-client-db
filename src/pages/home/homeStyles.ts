import styled from 'styled-components';

export const Main = styled.main`
	max-width: 1100px;
	width: 100%;
	height: auto;
	margin: 20px auto 95px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Memoji = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 150px;
	height: 150px;
	border-radius: 100%;
	background-color: #ffe5ed;
	img {
		width: 150px;
		height: 150px;
	}
	user-select: none;
`;

export const Title = styled.h1`
	font-family: 'Tourney', sans-serif;
	font-weight: 400;
	font-style: normal;
	color: #000000;
	text-transform: uppercase;
	text-align: center;
	font-size: 60px;
	height: 60px;
	margin: 50px 0 0 0;
`;

export const Sticker = styled.div`
	height: 40px;
	width: 190px;
	background-color: #ffe5ed;
	border-radius: 7px;
	font-family: 'Montserrat', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	color: #da3f3f;
	right: 15px;
	top: 115px;
`;

export const Input = styled.input`
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

export const Img = styled.img`
	filter: grayscale(1);
	will-change: transform;
	-webkit-filter: grayscale(1);
	mix-blend-mode: luminosity;
	border-radius: 30px;
	display: block;
	margin: 0 auto;
	width: calc(100% - 40px);
	height: 437px;
	object-position: center;
	object-fit: cover;
	image-rendering: auto;
`;

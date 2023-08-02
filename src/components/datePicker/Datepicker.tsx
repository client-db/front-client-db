import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface IProp {
	setData: React.Dispatch<React.SetStateAction<string>>;
}

export default function Datepicker({ setData }: IProp) {
	return (
		<DatapickerToggle>
			<DatapickerToggleBtn>
				<img src='/icons/calendar.png' />
			</DatapickerToggleBtn>
			<DatepickerInput
				onChange={(e: ChangeEvent<HTMLInputElement>) => setData(e.target.value)}
				type='date'
			/>
		</DatapickerToggle>
	);
}
const DatapickerToggle = styled.span`
	position: absolute;
	display: inline-block;
	width: 25px;
	height: 25px;
	right: 12px;
	top: 12px;
	user-select: none;
	img {
		width: 25px;
		height: 25px;
	}
`;
const DatapickerToggleBtn = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	user-select: none;
`;
const DatepickerInput = styled.input`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	box-sizing: border-box;
	::-webkit-calendar-picker-indicator {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
`;

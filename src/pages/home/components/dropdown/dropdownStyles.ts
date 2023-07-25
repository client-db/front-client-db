import styled from 'styled-components';

interface IProps {
	isVisible?: boolean;
	selected?: boolean;
}

export const Dropdown = styled.div`
	position: relative;
	width: calc(50% - 7.5px);
`;
export const DropdownBtn = styled.div<IProps>`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 16px;
	background: rgb(235, 235, 235);
	box-shadow: inset 0 0 0 1px transparent;
	outline: none;
	border: none;
	padding: 15px;
	border-radius: 10px;
	color: ${(props) => (props.selected ? '#000' : 'grey')};
	cursor: pointer;
`;
export const DropdownItems = styled.div<IProps>`
	font-family: 'Montserrat', sans-serif;
	background: rgb(235, 235, 235);
	box-shadow: inset 0 0 0 1px transparent;
	width: 200px;
	position: absolute;
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	outline: none;
	border: none;
	padding: 15px 0;
	border-radius: 10px;
	visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
	& :not(:first-child) {
		padding: 10px 15px 0;
	}
	& :not(:last-child) {
		border-bottom: 1px solid #cecece;
	}
`;
export const DropdownItem = styled.div`
	padding: 0 15px 10px;
	cursor: pointer;
`;

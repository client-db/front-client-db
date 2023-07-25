import { Dispatch, SetStateAction, useState } from 'react';
import {
	Dropdown,
	DropdownBtn,
	DropdownItem,
	DropdownItems,
} from './dropdownStyles';

interface IProps {
	explicitly: string;
	notAvailable: string;
  setDocsAvailability: Dispatch<SetStateAction<string>>
}

const DropdownComponent = ({explicitly, notAvailable, setDocsAvailability}: IProps) => {
	const [dropdownState, setDropdownState] = useState<boolean>(false);
	const [dropdownValue, setDropdownValue] = useState<string>('');

	const handleDropdownClick = () => {
		setDropdownState(!dropdownState);
	};
	const handleSetDropdownValue = (value: string) => {
		setDropdownValue(value);
    setDocsAvailability(value)
		setDropdownState(!dropdownState);
	};

	return (
		<Dropdown>
			<DropdownBtn
				onClick={handleDropdownClick}
				selected={dropdownValue === explicitly || dropdownValue === notAvailable}
			>
				{dropdownValue === '' ? 'Наявність документів' : dropdownValue}
			</DropdownBtn>
			<DropdownItems isVisible={dropdownState}>
				<DropdownItem>
					<div onClick={() => handleSetDropdownValue(explicitly)}>{explicitly}</div>
				</DropdownItem>
				<DropdownItem>
					<div onClick={() => handleSetDropdownValue(notAvailable)}>{notAvailable}</div>
				</DropdownItem>
			</DropdownItems>
		</Dropdown>
	);
};

export default DropdownComponent;

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Dropdown, DropdownBtn, DropdownItem, DropdownItems } from './dropdownStyles';

interface IProps {
	explicitly: string;
	notAvailable: string;
	setDocsAvailability: Dispatch<SetStateAction<string>>;
	docsAvailability?: string;
}

const DropdownComponent = ({
	explicitly,
	notAvailable,
	setDocsAvailability,
	docsAvailability,
}: IProps) => {
	const [dropdownState, setDropdownState] = useState<boolean>(false);
	const [dropdownValue, setDropdownValue] = useState<string>('');

	const handleDropdownClick = () => {
		setDropdownState(!dropdownState);
	};
	const handleSetDropdownValue = (value: string) => {
		setDropdownValue(value);
		setDocsAvailability(value);
		setDropdownState(!dropdownState);
	};
	const useOutsideClick = (callback: () => void) => {
		const ref = useRef<HTMLDivElement | null>(null);

		useEffect(() => {
			const handleClick = (event: MouseEvent) => {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					callback();
				}
			};

			document.addEventListener('click', handleClick);

			return () => {
				document.removeEventListener('click', handleClick);
			};
		}, [ref, callback]);

		return ref;
	};
	const handleClickOutside = () => {
		setDropdownState(false);
	};
	const handleDropdownItemClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};
	const ref = useOutsideClick(handleClickOutside);

	useEffect(() => {
		if (!docsAvailability) return;
		setDropdownValue(docsAvailability);
	}, []);
	return (
		<Dropdown ref={ref}>
			<DropdownBtn
				onClick={handleDropdownClick}
				selected={dropdownValue === explicitly || dropdownValue === notAvailable}
			>
				{dropdownValue === '' ? 'Наявність документів' : dropdownValue}
			</DropdownBtn>
			<DropdownItems
				isVisible={dropdownState}
				onClick={(e) => handleDropdownItemClick(e)}
			>
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

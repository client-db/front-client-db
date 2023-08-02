import { ChangeEvent, useState } from 'react';
import { useApi } from '../../api';
import { Btn, Input, InputField } from './searchInputStyles';
import { SearchRes } from '../../api/admin/admin.types';

interface IProps {
	activeFilter: string;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setData: React.Dispatch<React.SetStateAction<SearchRes[]>>;
}

export default function SearchInput(props: IProps) {
	const activeFilter = props.activeFilter;
	const setLoading = props.setLoading;
	const setData = props.setData;
	const [searchValue, setSearchValue] = useState<string>('');
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

	const handleSubmit = async () => {
		try {
			setLoading(true);
			const data = {
				searchType: activeFilter,
				searchValue: searchValue,
			};
			const res = await useApi.search(data);
			setData(res.data);
		} catch (error: any) {
			if (
				(error.response && error.response.data === 'No data found') ||
				(error.response && error.response.data === 'Server Error')
			) {
				setSearchValue('');
				setData([]);
			} else {
				console.error('Error cum:', error);
			}
		} finally {
			setLoading(false);
		}
	};
	return (
		<InputField>
			<Input
				placeholder='Пошук...'
				value={searchValue}
				onChange={(e) => handleSearch(e)}
			/>
			<Btn onClick={handleSubmit}>
				<img src='/icons/search.svg' />
			</Btn>
		</InputField>
	);
}

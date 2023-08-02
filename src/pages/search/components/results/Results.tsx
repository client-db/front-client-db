import { AllFiltersField, Filter, FilterField, SeeMore } from './resultsStyles';
import { SearchRes } from '../../../../api/admin/admin.types';
import SearchInput from '../../../../components/searchInput/SearchInput';
import { useState } from 'react';
import ResultsField from '../../../../components/resultsField/ResultsField';

const Results = () => {
	const [activeFilter, setActiveFilter] = useState<string>('manager');
	const [data, setData] = useState<SearchRes[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [seeMore, setSeeMore] = useState<boolean>(false);
	const [openProfileIndex, setOpenProfileIndex] = useState<boolean[]>(
		Array(data.length).fill(false)
	);

	const handleOpenProfile = (index: number) => {
		setOpenProfileIndex((prevOpenStates) => {
			const newOpenStates = [...prevOpenStates];
			newOpenStates[index] = !prevOpenStates[index];
			return newOpenStates;
		});
	};
	return (
		<>
			<SearchInput
				activeFilter={activeFilter}
				setLoading={setLoading}
				setData={setData}
			/>
			<AllFiltersField>
				<FilterField>
					<Filter
						onClick={() => setActiveFilter('manager')}
						checked={activeFilter == 'manager'}
					>
						Менеджер
					</Filter>
					<Filter
						onClick={() => setActiveFilter('recommendation')}
						checked={activeFilter == 'recommendation'}
					>
						Рекомендація
					</Filter>
					<Filter
						onClick={() => setActiveFilter('address')}
						checked={activeFilter == 'address'}
					>
						Адреса
					</Filter>
					<Filter
						onClick={() => setActiveFilter('phoneNumber')}
						checked={activeFilter == 'phoneNumber'}
					>
						Номер телефону
					</Filter>
					{seeMore && (
						<>
							<Filter
								onClick={() => setActiveFilter('connectionDate')}
								checked={activeFilter == 'connectionDate'}
							>
								Дата підключення
							</Filter>
							<Filter
								onClick={() => setActiveFilter('objectNum')}
								checked={activeFilter == 'objectNum'}
							>
								Номер об&#39;єкту
							</Filter>
							<Filter
								onClick={() => setActiveFilter('subFee')}
								checked={activeFilter == 'subFee'}
							>
								Абонплата
							</Filter>
							<Filter
								onClick={() => setActiveFilter('docsAvailability')}
								checked={activeFilter == 'docsAvailability'}
							>
								Наявність документів
							</Filter>
							<Filter
								onClick={() => setActiveFilter('contractSendDate')}
								checked={activeFilter == 'contractSendDate'}
							>
								Дата надсилання договору
							</Filter>
							<Filter
								onClick={() => setActiveFilter('contractSignDate')}
								checked={activeFilter == 'contractSignDate'}
							>
								Дата отримання договору
							</Filter>
							<Filter
								onClick={() => setActiveFilter('position')}
								checked={activeFilter == 'position'}
							>
								Позиція
							</Filter>
						</>
					)}
				</FilterField>
				<SeeMore
					onClick={() => setSeeMore(!seeMore)}
					seeMore={seeMore}
				>
					<img src='/icons/triangle.svg' />
				</SeeMore>
			</AllFiltersField>
			<ResultsField
				setData={setData}
				loading={loading}
				data={data}
				openProfileIndex={openProfileIndex}
				handleOpenProfile={handleOpenProfile}
			/>
		</>
	);
};

export default Results;

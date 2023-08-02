import { SearchRes } from '../../api/admin/admin.types';
import Loader from '../../common/components/Loader';
import ResultCard from '../resultCard/ResultCard';
import { CardField, Container, Hr, SubTitle, Title } from './resultsFieldStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
	loading: boolean;
	data: SearchRes[];
	openProfileIndex?: boolean[];
	handleOpenProfile?: (index: number) => void;
	setData: React.Dispatch<React.SetStateAction<SearchRes[]>>;
	deleteClient?: boolean;
}

const notify = () =>
	toast.success('Ви успішно видалили дані клієнта!', {
		position: 'bottom-left',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});

export default function ResultsField(props: IProps) {
	const loading = props.loading;
	const data = props.data;
	const openProfileIndex = props.openProfileIndex;
	const handleOpenProfile = props.handleOpenProfile;
	const setData = props.setData;
	const deleteClient = props.deleteClient;

	const handleDeleteItem = (index: number) => {
		setData((prevData) => {
			const newData = [...prevData];
			newData.splice(index, 1);
			return newData;
		});
		notify();
	};
	return (
		<Container>
			<Title>Результати</Title>
			<Hr />
			<CardField>
				{loading && <Loader />}
				{data.length < 1 && !loading && <SubTitle>Нічого не знайдено :(</SubTitle>}
				{!loading && data.length >= 1 && openProfileIndex && handleOpenProfile && (
					<>
						{data?.map((client, i) => (
							<ResultCard
								handleDeleteItem={() => handleDeleteItem(i)}
								key={i}
								client={client}
								isOpen={openProfileIndex[i]}
								onSeeMoreClick={() => handleOpenProfile(i)}
								deleteClient={deleteClient}
							/>
						))}
					</>
				)}
			</CardField>
			<ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme='light'
			/>
		</Container>
	);
}

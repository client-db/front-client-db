import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Main, Title } from './deleteClientStyles';
import Memoji from '../../components/memoji/Memoji';
import { SearchRes } from '../../api/admin/admin.types';
import SearchInput from '../../components/searchInput/SearchInput';

import ResultsField from '../../components/resultsField/ResultsField';

function DeleteClient() {
	const [data, setData] = useState<SearchRes[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
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
	useEffect(() => {
		document.title = 'CSN | Delete client';
	}, []);

	return (
		<>
			<Navbar />
			<Main>
				<Memoji srcLink={'/memoji/blow-my-mind.webp'} />
				<Title>Видалити клієнта</Title>
				<SearchInput
					activeFilter={'phoneNumber'}
					setLoading={setLoading}
					setData={setData}
				/>
				<ResultsField
					setData={setData}
					loading={loading}
					data={data}
					openProfileIndex={openProfileIndex}
					handleOpenProfile={handleOpenProfile}
					deleteClient
				/>
			</Main>
			<Footer />
		</>
	);
}

export default DeleteClient;

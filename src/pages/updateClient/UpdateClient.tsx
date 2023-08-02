import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import {
	CardField,
	Container,
	Hr,
	Main,
	Sticker,
	SubContainerTitle,
	SubTitle,
	Title,
} from './updateClientStyles';
import Memoji from '../../components/memoji/Memoji';
import { SearchRes } from '../../api/admin/admin.types';
import SearchInput from '../../components/searchInput/SearchInput';
import InputsField from './inputsField/InputsField';
import Loader from '../../common/components/Loader';

function UpdateClient() {
	const [data, setData] = useState<SearchRes[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	useEffect(() => {
		document.title = 'CSN | Update client';
	}, []);

	return (
		<>
			<Navbar />
			<Main>
				<Memoji
					srcLink={'/memoji/updateClient.svg'}
					toTop
				/>
				<Title>Оновити дані</Title>
				<SearchInput
					activeFilter={'position'}
					setLoading={setLoading}
					setData={setData}
				/>

				<Sticker>Пошук лише по позиції!</Sticker>
				<Container>
					<SubTitle>Результати</SubTitle>
					<Hr />
					<CardField>
						{loading && <Loader />}
						{data.length < 1 && !loading && (
							<SubContainerTitle>Нічого не знайдено :(</SubContainerTitle>
						)}
						{success == false &&
							data.length > 0 &&
							!loading &&
							data?.map((client) => (
								<InputsField
									key={client.position}
									client={client}
									setSuccess={setSuccess}
								/>
							))}
					</CardField>
				</Container>
			</Main>
			<Footer />
		</>
	);
}

export default UpdateClient;

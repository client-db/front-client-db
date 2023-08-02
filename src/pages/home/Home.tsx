import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Main, Sticker, Title } from './homeStyles';
import Memoji from '../../components/memoji/Memoji';
import InputsField from './components/inputsField/InputsField';

const Home = () => {
	useEffect(() => {
		document.title = 'CSN | Add new client';
	}, []);
	return (
		<>
			<Navbar />
			<Main>
				<Memoji
					left
					srcLink={'/memoji/sticker.webp'}
				/>
				<Title>Додати клієнта</Title>
				<Sticker>- Усі поля обов&#39;язкові!</Sticker>
				<InputsField />
			</Main>
			{/* <Img src='/db-image.webp' /> */}
			<Footer />
		</>
	);
};

export default Home;

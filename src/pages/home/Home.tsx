import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import InputsField from './components/inputField/InputsField';
import { Main, Memoji, Sticker, Title } from './homeStyles';

const Home = () => {
	return (
		<>
			<Navbar />
			<Main>
				<Memoji>
					<img src='/memoji/sticker.webp' />
				</Memoji>
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

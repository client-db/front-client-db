import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import InputsField from './components/InputsField';
import { Main, Memoji, Sticker, Title } from './homeStyles';

const Home = () => {
	return (
		<>
			<Navbar />
			<Main>
				<Memoji>
					<img src='/memoji/sticker.webp' />
				</Memoji>
				<Title>Add new client</Title>
				<Sticker>- All fields required!</Sticker>
				<InputsField />
			</Main>
			{/* <Img src='/db-image.webp' /> */}
			<Footer />
		</>
	);
};

export default Home;

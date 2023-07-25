import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Input, InputField, Main, Memoji, Title } from './searchStyles';

const Search = () => {
	return (
		<>
			<Navbar />
			<Main>
				<Memoji>
					<img src='https://rodrigovarejao.com/wp-content/uploads/2021/05/boy-memoji.webp' />
				</Memoji>
				<Title>Пошук</Title>
				<InputField>
					<img src='/icons/search.svg' />
					<Input placeholder='Пошук...' />
				</InputField>
			</Main>
			<Footer />
		</>
	);
};

export default Search;

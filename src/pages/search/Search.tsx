import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Main, Title } from './searchStyles';
import Results from './components/results/Results';
import Memoji from '../../components/memoji/Memoji';

const Search = () => {
	useEffect(() => {
		document.title = 'CSN | Search client';
	}, []);
	
	return (
		<>
			<Navbar />
			<Main>
				<Memoji
					left
					bigMemoji
					srcLink={'https://rodrigovarejao.com/wp-content/uploads/2021/05/boy-memoji.webp'}
				/>
				<Title>Пошук</Title>
				<Results />
			</Main>
			<Footer />
		</>
	);
};

export default Search;

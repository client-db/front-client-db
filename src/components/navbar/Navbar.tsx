import { LinkItem, LinkField, Main } from './navbarStyles';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<Main>
			<LinkField>
				<NavLink to='/' >
					<LinkItem>Додати клієнта</LinkItem>
				</NavLink>
				<NavLink to='/search'>
					<LinkItem>Пошук</LinkItem>
				</NavLink>
				<LinkItem>Оновити дані</LinkItem>
				<LinkItem>Видалити клієнта</LinkItem>
			</LinkField>
		</Main>
	);
};

export default Navbar;

import { LinkItem, LinkField, Main } from './navbarStyles';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<Main>
			<LinkField>
				<NavLink to='/'>
					<LinkItem>Додати клієнта</LinkItem>
				</NavLink>
				<NavLink to='/search'>
					<LinkItem>Пошук</LinkItem>
				</NavLink>
				<NavLink to='/update'>
					<LinkItem>Оновити дані</LinkItem>
				</NavLink>
				<NavLink to='/delete'>
					<LinkItem>Видалити клієнта</LinkItem>
				</NavLink>
			</LinkField>
		</Main>
	);
};

export default Navbar;

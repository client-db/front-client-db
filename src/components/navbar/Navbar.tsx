import { LinkItem, LinkField, Main } from './navbarStyles';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Main>
			<LinkField>
				<Link to='/'>
					<LinkItem>Add client</LinkItem>
				</Link>
				<Link to='/search'>
					<LinkItem>Search</LinkItem>
				</Link>
				<LinkItem>Update Client</LinkItem>
				<LinkItem>Delete Client</LinkItem>
			</LinkField>
		</Main>
	);
};

export default Navbar;

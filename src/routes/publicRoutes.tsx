import DeleteClient from '../pages/deleteClient/DeleteClient';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import UpdateClient from '../pages/updateClient/UpdateClient';

export const publicRoutes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/search',
		element: <Search />,
	},
	{
		path: '/delete',
		element: <DeleteClient />,
	},
	{
		path: '/update',
		element: <UpdateClient />,
	},
];
export default publicRoutes;

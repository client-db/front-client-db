import Home from '../pages/home/Home';
import Search from '../pages/search/Search';

export const publicRoutes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/search',
		element: <Search />,
	},
];
export default publicRoutes;

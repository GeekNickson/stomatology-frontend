import Auth from '../../components/auth/Auth';
import Home from '../../components/Home';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../constants/routes.constants';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: LOGIN_ROUTE,
    render: () => <Auth register={false} />,
  },
  {
    path: REGISTER_ROUTE,
    render: () => <Auth register={true} />,
  },
];

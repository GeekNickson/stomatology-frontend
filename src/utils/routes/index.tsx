import Auth from '../../components/Auth';
import Home from '../../components/Home';
import Profile from '../../components/Profile';
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROURE, REGISTER_ROUTE } from '../constants/routes.constants';

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

export const authRoutes = [
  {
    path: PROFILE_ROURE,
    component: Profile,
  },
];

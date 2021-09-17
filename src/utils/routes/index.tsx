import Auth from '../../components/Auth';
import DoctorProfile from '../../components/DoctorProfile';
import Home from '../../components/Home';
import Profile from '../../components/Profile';
import SignUpWrapper from '../../components/SignUpWrapper';
import {
  DOCTOR_PROFILE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROURE,
  REGISTER_ROUTE,
  SIGN_UP_DOCTOR_ROUTE,
  SIGN_UP_SERVICE_ROUTE,
} from '../constants/routes.constants';

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
  {
    path: DOCTOR_PROFILE_ROUTE,
    component: DoctorProfile,
  },
];

export const authRoutes = [
  {
    path: PROFILE_ROURE,
    component: Profile,
  },
  {
    path: SIGN_UP_SERVICE_ROUTE,
    component: SignUpWrapper,
  },
  {
    path: SIGN_UP_DOCTOR_ROUTE,
    component: SignUpWrapper,
  },
];

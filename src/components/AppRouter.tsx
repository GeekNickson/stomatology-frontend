import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from '../shared/hooks/hooks';
import { HOME_ROUTE } from '../utils/constants/routes.constants';
import { authRoutes, publicRoutes } from '../utils/routes';

const AppRouter = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  return (
    <Switch>
      {isAuthenticated && authRoutes.map((props) => <Route key={props.path} {...props} exact />)}
      {publicRoutes.map((props) => (
        <Route key={props.path} {...props} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

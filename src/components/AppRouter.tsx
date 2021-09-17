import { FunctionComponent, useLayoutEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAppSelector } from '../shared/hooks/hooks';
import { HOME_ROUTE } from '../utils/constants/routes.constants';
import { authRoutes, publicRoutes } from '../utils/routes';

const AppRouter: FunctionComponent = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

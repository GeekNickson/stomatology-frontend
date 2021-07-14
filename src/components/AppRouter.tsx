import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../utils/routes';

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map((props) => (
        <Route key={props.path} {...props} exact />
      ))}
    </Switch>
  );
};

export default AppRouter;

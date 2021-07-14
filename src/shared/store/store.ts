import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  authReducer,
  router: connectRouter(history),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

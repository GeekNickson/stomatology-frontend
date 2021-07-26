import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { useAppDispatch } from './shared/hooks/hooks';
import { loadUser } from './shared/store/slices/auth-slice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;

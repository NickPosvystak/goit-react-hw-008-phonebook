// import { ContactForm } from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/AuthReducer';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import { Home } from 'pages/Home';

// const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  {
    path: '/register',
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
 
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <div className={css.box}>
        <Navigation />
        <Suspense fallback="Loading...">
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

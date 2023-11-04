// import { ContactForm } from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation';

// const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
  },
];

export const App = () => {
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

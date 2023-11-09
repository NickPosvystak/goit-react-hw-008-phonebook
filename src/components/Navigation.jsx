import { StyledNavLink } from 'App.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/AuthReducer';
// import { Outlet } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/authSelector';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <nav>
      {authenticated ? (
        <>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <button type="button" onClick={onLogOut}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </>
      )}
      {/* <Outlet /> */}
    </nav>
  );
};

export default Navigation;

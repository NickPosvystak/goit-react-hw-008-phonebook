import { StyledNavLink } from 'App.styled';
import React from 'react';
import { useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/authSelecor';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  return (
    <nav>
      {authenticated ? (
        <>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <button type="button">Log Out</button>
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

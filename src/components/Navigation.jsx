import { StyledNavLink } from 'App.styled';
import React from 'react';
import {  Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <Outlet />
    </nav>
  );
};

export default Navigation;

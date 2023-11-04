import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  font-size: 22px;
  text-decoration: none;

  margin-top: 10px;
  margin-right: 12px;
  margin-left: 12px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;
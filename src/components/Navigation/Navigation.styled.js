import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  display: inline-block;
  padding: 2px;
  font-size: 16px;
  text-decoration: none;

  margin-right: 8px;

  transition: all 0.3s;

  &:nth-child(2n) {
    margin-right: auto;
  }

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;
export const StyledBtn = styled.button`
  cursor: pointer;

  margin-left: 5px;
`;

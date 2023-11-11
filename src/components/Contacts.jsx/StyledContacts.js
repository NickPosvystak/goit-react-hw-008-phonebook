import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* border: 1px solid black; */
  /* max-width: 280px; */
  margin-right: auto;

  margin-left: auto;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 8px;
  margin-bottom: 15px;

  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  p {
    margin-left: auto;
    margin-right: 20px;
  }
`;

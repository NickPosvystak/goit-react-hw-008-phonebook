import styled from 'styled-components';


export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid black;
  /* max-width: 280px; */
  margin-right: auto;

  margin-left: auto;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  p{
margin-left: auto;
margin-right: 20px;
  }
`;

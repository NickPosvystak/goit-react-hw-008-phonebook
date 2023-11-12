import styled from 'styled-components';

export const StyledForm = styled.form`
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  /* border: 2px solid black; */
  border-radius: 6px;
  justify-content: center;

  margin-right: auto;
  margin-left: auto;

 
`;

export const Title = styled.h1`
  text-align: center;

  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  flex: 1 0 140px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 0;
`;
export const StyledBtn = styled.button`
  border-radius: 6px;
  flex: 1 0 50px;

  // Style
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: 100%;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media only screen and (min-width: 768px) {
    margin-top: 10px;
    padding: 1rem 2rem;
  }
  &:hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }
`;

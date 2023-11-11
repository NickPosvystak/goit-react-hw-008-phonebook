import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: flex;
  /* align-items: center; */
  margin-bottom: 10px;
`;
export const StyledApp = styled.div`
  padding: 10px;
  margin-top: 15px;
  border-radius: 6px;
  background: rgb(104, 232, 101);
  background: linear-gradient(
    180deg,
    rgba(104, 232, 101, 1) 3%,
    rgba(99, 171, 26, 0.29175420168067223) 59%,
    rgba(252, 176, 69, 1) 100%
  );
  /* backdrop-filter: blur(10px); */

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }
`;

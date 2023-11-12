import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const StyledApp = styled.div`
  padding: 10px;
  margin-top: 15px;
  border-radius: 6px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    4deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(163, 140, 126, 1) 40%,
    rgba(0, 212, 255, 1) 100%
  );
  /* backdrop-filter: blur(10px); */

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }
`;

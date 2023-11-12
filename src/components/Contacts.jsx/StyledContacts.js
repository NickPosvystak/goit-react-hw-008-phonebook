import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;

  margin-left: auto;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  padding: 4px 8px;
  margin-bottom: 15px;

  border-radius: 4px;

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  p {
    margin-left: auto;
    margin-right: 20px;
  }
`;

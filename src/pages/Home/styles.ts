import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: whitesmoke;

    &:hover {
      color: ${({ theme }) => theme.orange};
    }
  }
  svg:last-child {
    width: 3rem;
    height: 1.5rem;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.orange};
    }
  }
`;

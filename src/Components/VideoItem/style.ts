import { rgba } from "polished";
import styled from "styled-components";
import { theme } from "../../styles";

interface PropsImag {
  imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 4rem;
  background: ${({ theme }) => theme.currentLine};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3rem;

  overflow: hidden;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Thumb = styled.div<PropsImag>`
  border-radius: 0.3rem;
  min-width: 5rem;
  height: 100%;
  background: ${({ theme, imgUrl }) =>
    `linear-gradient(0deg, ${rgba(theme.purple, 0.6)} 0%, ${rgba(
      theme.pink,
      0
    )} 100%), url(${imgUrl}) no-repeat center`};
  background-size: "cover";
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5rem;
  justify-content: space-between;
  height: 100%;
  flex: 1;

  strong {
    display: block;
    font-size: 0.7rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;
    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.cyan};
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }

    > svg {
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        color: ${({ theme }) => theme.pink};
      }
    }
  }
`;

export const Button = styled.button`
  border-radius: 0.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  background: ${({ theme }) => theme.purple};
  color: whitesmoke;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem 0.5rem;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.pink};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

import styled from "styled-components";
import { Title } from "../Title";

export const Container = styled.main`
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;

  span {
    color: whitesmoke;
    font-size: 1.9rem;
    font-weight: bold;
    transition: all 1.5ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.orange};
    }
  }
`;

export const PageTitle = styled.h3`
  position: relative;
  margin-left: 1.2rem;
  font-size: 1.5rem;
  align-self: flex-start;

  &::before {
    content: "";
    position: absolute;
    left: -0.8rem;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.pink};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.1rem;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

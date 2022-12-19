import styled from "styled-components";
import { theme } from "../../styles";
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

export const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.foreground};

  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 0;
  transition: 0.4s ease-in;

  &:hover {
    background: ${({ theme }) => theme.pink};
  }
`;

export const OrContainer = styled.section`
  width: 100%;
  margin: 1rem 0;
  div {
    z-index: 1;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.currentLine};
    position: relative;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    p {
      text-align: center;
      font-size: 1.1rem;
      text-transform: uppercase;
    }
  }
`;

export const Signup = styled.a`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.purple};
  background: ${({ theme }) => theme.comment};
  color: ${({ theme }) => theme.foreground};
  text-align: center;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 0;
  transition: 0.4s ease-in;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.pink};
  }
`;

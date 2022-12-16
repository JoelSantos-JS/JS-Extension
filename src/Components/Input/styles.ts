import { lighten } from "polished";
import styled from "styled-components";
import { theme } from "../../styles";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.foreground};
`;

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.currentLine};
  border: 2px solid ${({ theme }) => lighten(0.09, theme.currentLine)};
`;

import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  border-radius: 4px;
`;

export const Button = styled(StyledButton)`
  font-family: arial, sans-serif;
  margin: 11px 5px;
  padding: 0 16px;
  line-height: 27px;
  min-width: 54px;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  border: 1px solid ${({ theme }) => theme.button.primary.border};

  &:hover {
    box-shadow: ${({ theme }) => theme.button.primary.hover.boxShadow};
    border: 1px solid ${({ theme }) => theme.button.primary.hover.border};
    color: ${({ theme }) => theme.button.primary.hover.color};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.button.primary.focus.border};
    outline: none;
  }
`;

export const SecondaryBtn = styled(StyledButton)`
  background: ${({ theme }) => theme.button.secondary.background};
  color: ${({ theme }) => theme.button.secondary.color};
  border: 1px solid transparent;
  font-family: Roboto, sans-serif;
  margin: 0px 8px 0px 8px;
  padding: 9px 23px;
  line-height: 16px;
  min-width: 96px;
  letter-spacing: 0.25px;

  &:hover {
    box-shadow: ${({ theme }) => theme.button.secondary.hover.boxShadow};
    background-color: ${({ theme }) => theme.button.secondary.hover.background};
  }

  &:focus {
    background-color: ${({ theme }) => theme.button.secondary.focus.background};
    box-shadow: ${({ theme }) => theme.button.secondary.focus.boxShadow};
    outline: none;
  }
`;

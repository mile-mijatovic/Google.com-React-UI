import styled from "styled-components";

const Nav = styled.nav`
  display: none;
  background-color: ${({ theme }) => theme.menu.background};
  padding: 5px 0;
  position: absolute;
  right: 36px;
  bottom: 45px;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);

  &.open {
    display: block;
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px 16px;
    color: ${({ theme }) => theme.menu.color};

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    svg {
      margin-left: 8px;
      width: 20px;
      height: 20px;
    }
  }
`;

export default function Menu({ isOpen, children }) {
  return <Nav className={isOpen ? "open" : ""}>{children}</Nav>;
}

import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { SecondaryBtn } from "../components/Button";
import { ReactComponent as MenuIcon } from "../assets/svg/menu.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 6px;
  height: 48px;
`;

const Nav = styled.nav`
  margin-right: 15px;

  a {
    margin-left: 15px;
    font-size: 13px;
  }
`;

const Menu = styled(Link)`
  padding: 4px;
  .inner {
    display: flex;
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      background: rgba(60, 64, 67, 0.08);
    }
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  & g {
    fill: ${({ theme }) => theme.icon};
  }
`;

export default function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      {location.pathname === "/" ? (
        <Nav>
          <a onClick={() => window.open("https://mail.google.com/")}>Gmail</a>
          <Link to="images">Images</Link>
        </Nav>
      ) : null}
      <Menu to="/" title="Google Apps">
        <div className="inner">
          <StyledMenuIcon />
        </div>
      </Menu>
      <Link to="sign-in">
        <SecondaryBtn
          onClick={() => window.open("https://accounts.google.com/")}
        >
          Sign in
        </SecondaryBtn>
      </Link>
    </StyledHeader>
  );
}

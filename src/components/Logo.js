import styled from "styled-components";
import originalLogo from "../assets/logo.png";
import whiteLogo from "../assets/logo_white.png";

import { useSelector } from "react-redux";

const Wrapper = styled.div`
  position: relative;
`;

const GoogleLogo = styled.img`
  height: 92px;
`;

const Text = styled.span`
  color: #4285f4;
  font: 16px Roboto, sans-serif;
  position: absolute;
  left: 215px;
  bottom: 0;
  white-space: nowrap;
`;

export default function Logo(props) {
  const { images } = props;
  const theme = useSelector((state) => state.ui.theme);

  return (
    <Wrapper>
      <GoogleLogo
        src={theme === "light" ? originalLogo : whiteLogo}
        alt="logo"
      />
      {images ? <Text>images</Text> : null}
    </Wrapper>
  );
}

import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { ReactComponent as VoiceIcon } from "../assets/svg/voice.svg";

import camera from "../assets/img/camera.png";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  height: 44px;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.background};
  border: 1px solid ${({ theme }) => theme.input.border};
  box-shadow: none;
  border-radius: 24px;
  margin: 0 auto;
  padding: 0px 8px 0 17px;
  width: auto;
  max-width: 584px;

  &:hover {
    background-color: ${({ theme }) => theme.input.hover.background};
    box-shadow: 0 1px 6px ${({ theme }) => theme.input.hover.boxShadow};
    border-color: ${({ theme }) => theme.input.hover.border};
  }
`;

const Icon = styled(SearchIcon)`
  margin-right: 17px;
`;

const Voice = styled(VoiceIcon)`
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
`;

const Camera = styled.img`
  cursor: pointer;
  height: 24px;
  width: 24px;
  margin-right: 8px;
`;

const Search = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.input.color};
  word-wrap: break-word;
  outline: none;
  height: 34px;
  font-size: 16px;
`;

export default function Input(props) {
  const { images } = props;
  const inputElementRef = useRef(null);

  useLayoutEffect(() => {
    inputElementRef.current.focus();
  }, []);

  return (
    <Root onClick={() => inputElementRef.current.focus()}>
      <Icon />
      <Search type="text" ref={inputElementRef} title="Search" />
      {images ? <Camera src={camera} alt="camera" /> : null}
      <Voice title="Search by voice" />
    </Root>
  );
}

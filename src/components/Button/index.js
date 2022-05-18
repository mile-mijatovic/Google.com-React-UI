import * as S from "./styles";

const Button = ({ children }) => <S.Button>{children}</S.Button>;

const SecondaryBtn = ({ children }) => (
  <S.SecondaryBtn>{children}</S.SecondaryBtn>
);

export { Button, SecondaryBtn };

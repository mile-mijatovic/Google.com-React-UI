import styled from "styled-components";
import Input from "../components/Input";
import { Button } from "./Button";

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  max-height: 160px;
`;

const Stack = styled.div`
  margin: 0 auto;
  width: 640px;
  padding-top: 6px;
  width: auto;
  max-width: 584px;
  position: relative;
`;

export default function Search(props) {
  const { images } = props;
  return (
    <Wrapper>
      <form>
        <Stack>
          <Input images={images} />
          {!images ? (
            <div style={{ paddingTop: "17px" }}>
              <Button>Google Search</Button>
              <Button>I'm Feeling Lucky</Button>
            </div>
          ) : null}
        </Stack>
      </form>
    </Wrapper>
  );
}

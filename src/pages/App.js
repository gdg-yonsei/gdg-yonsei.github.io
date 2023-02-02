import Hero from "@layout/Main";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.backgroundColor.white};
`;

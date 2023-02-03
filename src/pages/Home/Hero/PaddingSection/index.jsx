import Lottie from "react-lottie-player";
import styled from "styled-components";
import scrollDownJson from "@assets/lotties/scrollDown.json";

function PaddingSection() {
  return (
    <Container>
      <Lottie loop animationData={scrollDownJson} play />
    </Container>
  );
}

export default PaddingSection;

const Container = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  transform: scale(0.6);
  transform-origin: bottom center;

  svg {
    path {
      fill: ${(props) => props.theme.color.grey};
    }
  }
`;

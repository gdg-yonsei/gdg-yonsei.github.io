import styled from "styled-components";

function PaddingSection() {
  return <Container />;
}

export default PaddingSection;

const Container = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

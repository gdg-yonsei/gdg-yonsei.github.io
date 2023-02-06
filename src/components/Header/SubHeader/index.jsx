import styled from "styled-components";

function SubHeader() {
  return (
    <Container>
      <Span>GDSC - Yonsei 2023</Span>
      <AbsoluteSpan>Click for Details</AbsoluteSpan>
    </Container>
  );
}

export default SubHeader;

const Container = styled.div`
  width: 90%;
  padding-top: 5vh;
  padding-bottom: 2vh;

  border-bottom: 3px solid ${(props) => props.theme.lightColor.light};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.backgroundColor.white};
`;

const AbsoluteSpan = styled.span`
  display: inline-block;

  position: absolute;
  top: 140%;
  right: 0%;

  font-size: 16px;
  font-weight: 300;
  letter-spacing: 4px;
  color: ${(props) => props.theme.backgroundColor.white};
`;

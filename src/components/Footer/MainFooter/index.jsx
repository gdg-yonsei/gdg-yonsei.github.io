import styled from "styled-components";

function MainFooter() {
  return (
    <Container>
      <LeftEnd>
        <LeftSpan>GDSC</LeftSpan>
        <LeftSpan>Yonsei</LeftSpan>
        <LeftSpan>Chapter</LeftSpan>
      </LeftEnd>
      <RightEnd>
        
      </RightEnd>
    </Container>
  );
}

export default MainFooter;

const Container = styled.footer`
  width: 100%;
  min-height: 50px;

  padding: 0 20px;
  border-top: 1px solid #dadce0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftEnd = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const LeftSpan = styled.span`
  display: inline-block;

  font-size: 14px;
  color: black;
`;

const RightEnd = styled.div``;

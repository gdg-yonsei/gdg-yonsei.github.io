import DropdownIcon from "@components/DropdownIcon";
import styled from "styled-components";

function MainHeader() {
  return (
    <Container>
      <LeftEnd></LeftEnd>
      <RightEnd>
        <DropdownIcon />
      </RightEnd>
    </Container>
  );
}

export default MainHeader;

const Container = styled.header`
  width: 100%;

  padding: 20px;

  display: flex;
  justify-content: space-between;
`;

const LeftEnd = styled.div``;

const RightEnd = styled.div`
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

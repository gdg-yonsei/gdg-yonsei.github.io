import DropdownIcon from "@components/DropdownIcon";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

function MainHeader() {
  const { scroll } = useLocomotiveScroll();

  return (
    <Container data-scroll data-scroll-position="top" data-scroll-speed="0.1">
      <LeftEnd>
        <LeftSpan>About us</LeftSpan>
      </LeftEnd>
      <RightEnd>
        <DropdownIcon />
        <LoginButton
          className="Login"
          onClick={() => {
            scroll.scrollTo("bottom", {
              duration: 600,
              easing: [0.06, 0.87, 0.11, 0.96],
            });
          }}
        >
          Login
        </LoginButton>
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

const LeftEnd = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  margin-left: 20px;
`;

const LeftSpan = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.color.darkgrey};
  cursor: pointer;
`;

const RightEnd = styled.div`
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const LoginButton = styled.button`
  box-sizing: border-box;
  width: 80px;
  height: 36px;

  padding: 9px 15px;

  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 16px;
  vertical-align: middle;

  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.backgroundColor.white};
  border: 1px solid #4285f4;
  border-radius: 4px;

  cursor: pointer;
`;

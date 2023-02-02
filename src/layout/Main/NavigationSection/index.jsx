import Button from "@components/Button";
import styled from "styled-components";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { TypeAnimation } from "react-type-animation";

function NavigationSection() {
  return (
    <Container>
      <NavbarContainer>
        <Navbar>
          <LeftEnd>
            <SearchIcon />
            <TypeAnimation
              sequence={["We are GDSC developers."]}
              style={{
                color: "black",
                fontSize: "24px",
              }}
              speed={20}
              wrapper="div"
            />
          </LeftEnd>
          <RightEnd>
            <KeyboardImg
              src="https://www.google.com/tia/tia.png"
              alt="ally keyboard"
            />
          </RightEnd>
        </Navbar>
      </NavbarContainer>
      <ButtonContainer>
        <StyledButton>
          <ButtonSpan>I'm Feeling Lucky</ButtonSpan>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default NavigationSection;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.div`
  width: 600px;
  min-width: 500px;
  padding: 10px 20px;
  border: 1px solid #b6c0c9;
  border-radius: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SearchIcon = styled(MdSearch)`
  font-size: 24px;

  color: #525151;
`;

const RightEnd = styled.div``;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  height: 36px;
`;

const ButtonSpan = styled.span`
  font-size: 20px;
`;

const KeyboardImg = styled.img`
  width: 24px;
  height: 24px;
  filter: grayscale(1);
  clip-path: circle(45% at 50% 50%);
`;

import DeveloperFooter from '@assets/images/GoogleDevelopers.png';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

function FooterSection() {
  const { scroll } = useLocomotiveScroll();

  return (
    <Container data-scroll-section>
      <TitleWrapper data-scroll data-scroll-speed="3">
        <Title>Interested In?</Title>
        <Subtitle>Be next!</Subtitle>
      </TitleWrapper>
      <ButtonContainer data-scroll data-scroll-speed="4">
        <GotoTopButton
          onClick={() => {
            scroll.scrollTo('top');
          }}
        >
          Take me to the top.
        </GotoTopButton>
      </ButtonContainer>
      <ImageWrapper>
        <FooterImage src={DeveloperFooter} />
      </ImageWrapper>
    </Container>
  );
}

export default FooterSection;

const Container = styled.footer`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.span`
  display: block;
  font-size: max(5vw, 40px);
  line-height: 1.5;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const Subtitle = styled.span`
  display: inline-block;
  font-size: max(3vw, 24px);

  color: ${(props) => props.theme.backgroundColor.black};
`;

const ButtonContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  padding-bottom: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const GotoTopButton = styled.button`
  font-size: 32px;
  font-weight: 600;

  padding: 16px 32px;

  border: 2px solid ${(props) => props.theme.backgroundColor.black};
  border-radius: 32px;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor.black};
    color: ${(props) => props.theme.backgroundColor.white};
  }

  ${({ theme }) => theme.mobile`
    padding: 8px 12px;
    
    font-size: 20px;
  `}
`;

const ImageWrapper = styled.figure`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  width: 80vw;
`;

const FooterImage = styled.img`
  width: 100%;
`;

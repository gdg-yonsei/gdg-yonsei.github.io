import { OdessaDoodle } from '@components/Doodle';
import { useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

function FooterSection() {
  const { scroll } = useLocomotiveScroll();
  const doodleRef = useRef(null);

  const onClickContainer = () => {
    doodleRef.current.update();
  };

  return (
    <Container data-scroll-section onClick={onClickContainer}>
      <TitleWrapper data-scroll data-scroll-speed="3">
        <Title>We recruit on yearly schedule.</Title>
        <Subtitle>Stay Tuned!</Subtitle>
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
      <DoodleWrapper>
        <OdessaDoodle shapeFrequency={0.6} ref={doodleRef} />
      </DoodleWrapper>
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

  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.span`
  display: block;
  font-size: max(5vw, 32px);
  line-height: 1.5;

  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    line-height: 1.25;
  `}
`;

const Subtitle = styled.span`
  display: inline-block;
  font-size: max(3vw, 20px);

  color: ${(props) => props.theme.backgroundColor.black};
`;

const ButtonContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 15vh;
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

const DoodleWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  width: 60vw;
  height: 37.2vh;
`;

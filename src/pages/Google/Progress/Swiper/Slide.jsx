import { motion } from 'framer-motion';
import styled from 'styled-components';

function Slide({ content, index, onFocus }) {
  const onClickSlide = () => {
    onFocus(index);
  };

  return (
    <SlideContainer
      onClick={onClickSlide}
      layout
      layoutId={index + ''}
      whileHover={{
        borderRadius: 0,
        transtiion: {
          duration: 0.3,
        },
      }}
      whileInView={{
        transform: 'none',
      }}
    >
      <ImageWrapper>
        <ImageBackground>
          <Image src={require(`/public/assets/SolutionChallenge/${content.logo}`)} />
        </ImageBackground>
      </ImageWrapper>
      <DescWrapper>
        <Index>{index + 1}</Index>
        <Name>{content.name}</Name>
      </DescWrapper>
    </SlideContainer>
  );
}

export default Slide;

const SlideContainer = styled(motion.div)`
  width: 40vw;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-radius: 20px;
  background-color: black;

  cursor: pointer;

  ${({ theme }) => theme.tablet`
    width: 80vw;
  `}
`;

const ImageWrapper = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBackground = styled.div`
  width: 175px;
  height: 175px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;

  background-color: ${(props) => props.theme.backgroundColor.white};
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
`;

const DescWrapper = styled.div`
  width: 100%;
  padding: 3% 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4vw;
`;

const Index = styled.span`
  font-size: 64px;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const Name = styled.span`
  display: inline-block;
  font-size: 36px;
  line-height: 1.2;

  color: ${(props) => props.theme.backgroundColor.white};

  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mobile`
    font-size: 24px;
  `}
`;

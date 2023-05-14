import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const FocusedCard = ({ focusedItem, focusedSectionId }) => {
  const [repoShown, setRepoShown] = useState(false);

  const onClickCorner = (event) => {
    event.stopPropagation();
    setRepoShown((prev) => !prev);
  };

  return (
    <Container
      layoutId={focusedSectionId + ''}
      style={{
        borderRadius: 20,
      }}
    >
      <Wrapper>
        <ImageWrapper>
          <ImageBackground>
            <Image src={require(`/public/assets/SolutionChallenge/${focusedItem.logo}`)} />
          </ImageBackground>
        </ImageWrapper>
        <ContentWrapper>
          <DescWrapper>
            <Description>{`${focusedItem.description}`}</Description>
          </DescWrapper>
          <FooterWrapper>
            <Index>{Number(focusedSectionId) + 1}</Index>
            <Name>{focusedItem.name}</Name>
          </FooterWrapper>
        </ContentWrapper>
      </Wrapper>
      <CornerGithub onClick={onClickCorner} repoShown={repoShown}>
        <CornerGithubIcon repoShown={repoShown} />
      </CornerGithub>
      <GithubLinks repoShown={repoShown}>
        {focusedItem.githubURL.map((item, idx) => {
          return (
            <GithubLink key={idx} href={`https://github.com/${item}`} target={'_blank'}>
              {item}
            </GithubLink>
          );
        })}
      </GithubLinks>
    </Container>
  );
};

export default FocusedCard;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 3200;

  width: 60vw;
  height: 80vh;

  background-color: ${(props) => props.theme.backgroundColor.black};
  overflow: hidden;

  cursor: default;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 5%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const ContentWrapper = styled.div`
  width: 100%;
  padding: 3% 10%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const DescWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4vw;
`;

const Index = styled.span`
  font-size: 96px;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const Name = styled.span`
  display: inline-block;
  font-size: 52px;
  line-height: 1.2;

  color: ${(props) => props.theme.backgroundColor.white};

  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mobile`
    font-size: 24px;
  `}
`;

const Description = styled.p`
  display: inline-block;
  font-size: 28px;
  line-height: 1.5;
  white-space: pre-line;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const CornerGithub = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  border-width: 0 100px 100px 0;

  border-style: solid;
  border-color: transparent ${(props) => props.theme.backgroundColor.white} transparent transparent;

  transition: all 0.3s ease-in-out;

  z-index: 5000;

  cursor: pointer;
`;

const CornerGithubIcon = styled(FaGithub)`
  position: absolute;
  top: 15px;
  right: -85px;

  transition: all 0.3s ease-in-out;

  width: 32.5px;
  height: 32.5px;
  rotate: 45deg;
`;

const GithubLinks = styled.ul`
  position: absolute;
  top: 0;
  right: 0;

  width: 400px;
  height: 200px;
  padding: 30px 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundColor.white};
  border-radius: 20px;

  transition: all 0.3s ease-in-out;
  transform-origin: right top;

  z-index: 3001;

  ${(props) =>
    props.repoShown
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0);
        `}
`;

const GithubLink = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 25px;
`;

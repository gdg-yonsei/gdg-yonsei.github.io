import { ReactComponent as SiGithub } from '@assets/images/icons/github.svg';
import { ReactComponent as DreamHackLogo } from '@assets/images/icons/server/hackaday.svg';
import { MdChevronRight } from '@react-icons/all-files/md/MdChevronRight';
import styled from 'styled-components';

function handleIcon(type = 'Github') {
  switch (type) {
    case 'Github':
      return <GithubIcon />;

    case 'Dreamhack':
      return <DreamHackIcon />;

    default:
      return <GithubIcon />;
  }
}

function GithubMenu(props) {
  return (
    <Container>
      <LinkWrapper href={props.link} target="_blank" rel="noreferrer noopener">
        <IconWrapper>{handleIcon(props.type)}</IconWrapper>
        <DescWrapper>
          <DescTitle>{props.title}</DescTitle>
          <Desc>{props.description}</Desc>
        </DescWrapper>
      </LinkWrapper>
      <ChevronRightIcon />
    </Container>
  );
}

export default GithubMenu;

const ChevronRightIcon = styled(MdChevronRight)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5%;

  font-size: 5vmax;
  opacity: 0;

  transition: all 0.3s ease-out;

  path {
    fill: ${(props) => props.theme.backgroundColor.white};
  }
`;

const Container = styled.li`
  width: 100%;

  position: relative;

  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;

  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #e15447;
  }

  &:hover ${ChevronRightIcon} {
    opacity: 1;
    right: 1%;
  }

  ${({ theme }) => theme.mobile`
    &:hover ${ChevronRightIcon} {
      opacity: 0;
    }
  `}
`;

const LinkWrapper = styled.a`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 8fr;

  ${({ theme }) => theme.mobile`
    grid-template-columns: 1fr 10fr;
  `}
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GithubIcon = styled(SiGithub)`
  width: max(3.6vw, 24px);
  height: max(3.6vw, 24px);
  path {
    fill: ${(props) => props.theme.backgroundColor.white};
  }
`;

const DreamHackIcon = styled(DreamHackLogo)`
  width: max(3.6vw, 24px);
  height: max(3.6vw, 24px);

  path {
    fill: ${(props) => props.theme.backgroundColor.white};
  }
`;

const DescWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1vh;

  padding: 1.5vw 3vh;

  ${({ theme }) => theme.mobile`
    padding: 1vh 1vw;
  `}
`;

const DescTitle = styled.h3`
  display: inline-block;
  font-size: 3.5vw;
  line-height: 1.5;
  color: ${(props) => props.theme.backgroundColor.white};

  margin-bottom: 0;

  ${({ theme }) => theme.mobile`
    line-height: 1;
  `}
`;

const Desc = styled.h4`
  display: inline-block;
  font-size: 1.5vw;

  line-height: 1.3;

  ${({ theme }) => theme.mobile`
    font-size: 7px;
    line-height: 1.1;
  `}
`;

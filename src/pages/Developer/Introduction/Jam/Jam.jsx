import { useHover } from '@hooks';
import { IconContext } from '@react-icons/all-files';
import { useCallback } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled, { css } from 'styled-components';

function Jam({ index, icon, scrollTarget, description, setHoveredSection }) {
  const [hoverRef, isHovered] = useHover(false);
  const { scroll } = useLocomotiveScroll();

  const IconStyle = {
    width: '30%',
    height: '100%',
    fontSize: '30%',
    color: 'black',
  };

  const handleMouseEnter = useCallback(() => {
    setHoveredSection(index);
  }, [index, setHoveredSection]);

  const handleMouseLeave = useCallback(() => {
    setHoveredSection(null);
  }, [setHoveredSection]);

  return (
    <Container
      ref={hoverRef}
      onClick={() => {
        scroll.scrollTo(scrollTarget);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconContainer>
        <IconContext.Provider
          value={{
            style: IconStyle,
          }}
        >
          {icon}
        </IconContext.Provider>
      </IconContainer>
      <DescContainer>
        <DescSpan isHovered={isHovered}>{description}</DescSpan>
      </DescContainer>
    </Container>
  );
}

export default Jam;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2%;

  display: grid;
  grid-template-rows: 6fr 1fr;

  border-radius: 20px;

  background-color: ${(props) => props.theme.backgroundColor.white};
  border: 3px solid ${(props) => props.theme.backgroundColor.black};

  cursor: pointer;

  ${({ theme }) => theme.tablet`
    grid-template-rows: 4fr 1fr;
  `}
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;

  overflow: hidden;
`;

const DescSpan = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;

  font-size: 2.3vw;

  transition: transform 0.3s cubic-bezier(0.13, 0.8, 0.24, 0.89);
  will-change: transform;

  ${(props) =>
    props.isHovered
      ? css`
          transform: translateY(-5%);
        `
      : css`
          transform: translateY(150%);
        `}

  ${({ theme }) => theme.tablet`
    font-size: 3vw;
  `}
`;

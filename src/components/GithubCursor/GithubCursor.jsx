import { ReactComponent as GithubIcon } from '@assets/images/icons/github.svg';
import { MouseContext } from '@context/MouseContext';
import useMousePosition from '@hooks/useMousePosition/useMousePosition';
import { memo, useContext } from 'react';
import styled, { css } from 'styled-components';

function GithubCursor() {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const isHovered = cursorType !== '';

  return (
    <Ring
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
      githubHovered={isHovered}
    >
      {isHovered && (
        <>
          <GithubIcon width={50} height={35} fill="white" />
          <InnerText>Go to Github</InnerText>{' '}
        </>
      )}
    </Ring>
  );
}

export default memo(GithubCursor);

const Ring = styled.div`
  position: fixed;

  border-radius: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: black;

  transform: translate(-50%, -50%);
  transition: width 0.2s ease-out, height 0.2s ease-out;

  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;

  ${(props) =>
    props.githubHovered
      ? css`
          width: 125px;
          height: 125px;
        `
      : css`
          width: 0;
          height: 0;
        `}
`;

const InnerText = styled.span`
  font-size: 14px;
  font-weight: 600;

  color: white;
`;

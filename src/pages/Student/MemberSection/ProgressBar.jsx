import { STUDENTS_PROGRESS_UPPER_LIMIT } from '@constants/constants';
import useLocomotiveScrollPosition from '@hooks/useLocomotiveScrollPosition';
import useWindowSize from '@hooks/useWindowSize';
import clamp from '@utils/clamp';
import { memo, useCallback } from 'react';
import styled, { useTheme } from 'styled-components';

function ProgressBar({ scrollIndex }) {
  const scrollPos = useLocomotiveScrollPosition(10);
  const { height } = useWindowSize();
  const { lightColor, backgroundColor } = useTheme();

  const HEIGHT_OFFSET = height * 1.05;
  const progress =
    clamp((scrollPos - HEIGHT_OFFSET) / (STUDENTS_PROGRESS_UPPER_LIMIT - HEIGHT_OFFSET), 0, 1) *
    100;

  const handleColor = useCallback(
    (idx) => {
      switch (idx) {
        case 0:
          return lightColor.red;
        case 1:
          return lightColor.blue;
        case 2:
          return lightColor.green;
        default:
          return backgroundColor.black;
      }
    },
    [backgroundColor.black, lightColor.blue, lightColor.green, lightColor.red],
  );

  return (
    <Container
      data-scroll
      data-scroll-sticky
      data-scroll-target="#fixed-element-members"
      progress={progress}
      bgcolor={handleColor(scrollIndex)}
    />
  );
}

export default memo(ProgressBar);

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 100;

  width: ${(props) => `${props.progress}%`};
  height: 7.5px;

  background-color: ${(props) => props.bgcolor};
  transition: background-color 1s cubic-bezier(0.1, 0.87, 0.19, 0.98);
`;

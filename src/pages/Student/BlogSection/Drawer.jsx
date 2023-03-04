import { motion, useInView } from 'framer-motion';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DrawerContents } from './DrawerContents';
import SessionBlog from './SessionBlog';
import SessionCard from './SessionCard';

function Drawer() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const drawerRef = useRef(null);
  const isDrawerInView = useInView(drawerRef, { amount: 0.1 });
  const [translateXPos, setTranslateXPos] = useState(90);

  useEffect(() => {
    if (isDrawerInView) {
      setTranslateXPos(0);
    } else {
      setTranslateXPos(90);
      setSelectedIndex(null);
    }
  }, [isDrawerInView]);

  return (
    <Container data-scroll data-scroll-sticky data-scroll-target="#fixed-element-DrawerContainer">
      <ContentWrapper ref={drawerRef} translatexpos={translateXPos}>
        <PaddingSection />
        {DrawerContents.map((content, idx) => {
          return (
            <Fragment key={idx}>
              <SessionCard
                index={idx}
                title={content.title}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <SessionBlog
                selected={selectedIndex === idx}
                index={idx}
                writeup={content.writeup}
                blogs={content.blogs}
              />
            </Fragment>
          );
        })}
      </ContentWrapper>
    </Container>
  );
}

export default memo(Drawer);

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled(motion.div)`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  border: 5px solid black;
  border-top-left-radius: 5vw;
  border-bottom-left-radius: 5vw;

  transform: ${(props) => `translateX(${props.translatexpos}%)`};
  transition: transform 0.65s cubic-bezier(0.17, 0.3, 0.07, 0.98);
`;

const PaddingSection = styled.div`
  width: 5vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundColor.black};
  border-top-left-radius: 4vw;
  border-bottom-left-radius: 4vw;
`;

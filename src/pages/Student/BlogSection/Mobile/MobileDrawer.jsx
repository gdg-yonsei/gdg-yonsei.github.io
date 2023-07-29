import { Fragment, memo, useState } from 'react';
import styled from 'styled-components';

import { DrawerContents } from '../components/DrawerContents';
import { MobileSessionBlog, MobileSessionCard } from './components';

function MobileDrawer() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Container data-scroll>
      <ContentWrapper>
        <PaddingSection />
        {DrawerContents.map((content, idx) => {
          return (
            <Fragment key={idx}>
              <MobileSessionCard
                index={idx}
                title={content.title}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <MobileSessionBlog
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

export default memo(MobileDrawer);

const Container = styled.div`
  width: 100%;
  height: 120vh;
  padding: 5vh 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 5px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const PaddingSection = styled.div`
  width: 100%;
  height: 5vh;

  background-color: ${(props) => props.theme.backgroundColor.black};
`;

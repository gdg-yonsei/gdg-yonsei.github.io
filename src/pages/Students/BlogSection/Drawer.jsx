import { memo, useState } from "react";
import styled from "styled-components";
import SessionCard from "./SessionCard";
import SessionBlog from "./SessionBlog";
import { DrawerContents } from "./DrawerContents";

function Drawer() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Container>
      <ContentWrapper>
        <PaddingSection />
        {DrawerContents.map((content, idx) => {
          return (
            <SessionCard
              key={idx}
              index={idx}
              title={content.title}
              setSelectedIndex={setSelectedIndex}
            >
              <SessionBlog
                selected={selectedIndex === idx}
                index={idx}
                writeup={content.writeup}
                blogs={content.blogs}
              />
            </SessionCard>
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

const ContentWrapper = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  border: 5px solid black;
`;

const PaddingSection = styled.div`
  width: 5vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundColor.black};
`;

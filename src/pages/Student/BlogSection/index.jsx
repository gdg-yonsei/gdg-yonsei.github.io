import styled from 'styled-components';
import Drawer from './Drawer';

function BlogSection() {
  return (
    <Container data-scroll-section>
      <TitleWrapper data-scroll data-scroll-speed="4.5">
        <Title>Checkout Our Dev. Blogs</Title>
      </TitleWrapper>
      <DrawerContainer id="fixed-element-DrawerContainer">
        <Drawer />
      </DrawerContainer>
    </Container>
  );
}

export default BlogSection;

const Container = styled.div`
  width: 100%;

  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
  margin-bottom: 5vh;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 5vw;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const DrawerContainer = styled.div`
  width: 100%;
  height: 200vh;
`;

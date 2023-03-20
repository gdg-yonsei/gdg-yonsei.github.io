import { useMediaQuery } from '@hooks/useMediaQuery';
import { MEDIA_QUERIES } from '@styles/media';
import styled from 'styled-components';

import Drawer from './Drawer';
import MobileDrawer from './Mobile/MobileDrawer';

function BlogSection() {
  const isMobileOrTablet = useMediaQuery(MEDIA_QUERIES.TABLET);

  return (
    <Container data-scroll-section>
      <TitleWrapper data-scroll data-scroll-speed="2.5">
        <Title>Checkout Our Dev. Blogs</Title>
      </TitleWrapper>
      <DrawerContainer id="fixed-element-DrawerContainer">
        {isMobileOrTablet ? <MobileDrawer /> : <Drawer />}
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
  font-size: max(5vw, 40px);

  color: ${(props) => props.theme.backgroundColor.black};
`;

const DrawerContainer = styled.div`
  width: 100%;
  height: 200vh;

  ${({ theme }) => theme.tablet`
    height: 140vh;
  `}
`;

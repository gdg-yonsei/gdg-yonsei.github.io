import GDSCLogo from '@assets/images/gdsclogo.png';
import { useState } from 'react';
import styled from 'styled-components';

function LogoSection() {
  const [opacity, setOpacity] = useState(0);

  return (
    <Container data-scroll data-scroll-position="top" data-scroll-speed="2">
      <LogoImg
        src={GDSCLogo}
        alt="GDSCLogo"
        opacity={opacity}
        onLoad={() => {
          setOpacity(1);
        }}
      />
    </Container>
  );
}

export default LogoSection;

const Container = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img.attrs((props) => ({
  style: {
    opacity: `${props.opacity}`,
  },
}))`
  margin-top: auto;
  width: min(30vw, 150px);

  ${({ theme }) => theme.mobile`
    margin-bottom: 16px;
  `}
`;

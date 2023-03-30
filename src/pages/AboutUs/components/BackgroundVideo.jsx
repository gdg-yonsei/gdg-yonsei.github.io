import styled from 'styled-components';

function BackgroundVideo() {
  return (
    <VideoContainer data-scroll data-scroll-sticky data-scroll-target="#aboutus-container">
      <video autoPlay loop muted>
        <source src={`/assets/video/GDSCIntro.mp4`} type="video/mp4" />
      </video>
    </VideoContainer>
  );
}

export default BackgroundVideo;

const VideoContainer = styled.picture`
  position: absolute;
  top: 0;
  left: 0;

  filter: brightness(20%);

  z-index: 1;
`;

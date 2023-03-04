import styled from 'styled-components';

import { offHoverAnimation, onHoverAnimation } from './animation';

function SessionBlog({ selected, index, writeup, blogs }) {
  return (
    <Container selected={selected}>
      <ContentWrapper selected={selected}>
        <IndexNumberSpan>0{index + 1}.</IndexNumberSpan>
        <WriteupSpan>{writeup}</WriteupSpan>
        <HorizontalDivider />
        <BlogWrapper>
          {blogs.map((blog, idx) => {
            return (
              <BlogLink key={idx} href={blog} target="_blank" rel="noreferrer noopener nofollow">
                {blog}
              </BlogLink>
            );
          })}
        </BlogWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default SessionBlog;

const Container = styled.div`
  width: ${(props) => (props.selected ? `20vw` : `0vw`)};
  height: 100%;
  position: relative;

  will-change: width;
  overflow: hidden;

  background-color: ${(props) => props.theme.backgroundColor.black};

  transition: width 0.5s cubic-bezier(0.17, 0.86, 0.22, 0.96);
  cursor: default;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 20vw;
  height: 100%;

  padding: 10vh 10% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  will-change: opacity;
  opacity: ${(props) => (props.selected ? `1` : `0`)};
  transition: opacity 0.5s cubic-bezier(0.17, 0.86, 0.22, 0.96);
`;

const IndexNumberSpan = styled.span`
  display: inline-block;
  font-size: 1.5vw;
  color: ${(props) => props.theme.backgroundColor.white};

  margin-bottom: 2vh;
`;

const WriteupSpan = styled.span`
  display: inline-block;
  font-size: 3vw;
  line-height: 1.1;
  color: ${(props) => props.theme.backgroundColor.white};

  margin-bottom: 3vh;
`;

const HorizontalDivider = styled.hr`
  width: 60%;
  margin-bottom: 3vh;
`;

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5vh;
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.backgroundColor.white};

  position: relative;

  font-size: 1vw;

  letter-spacing: -0.05px;

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;

    width: 0;
    height: 1px;
    background-color: ${(props) => props.theme.color.darkgrey};

    animation: ${offHoverAnimation} 0.5s cubic-bezier(0.17, 0.86, 0.22, 0.96) 0s forwards;
  }

  &:hover::before {
    animation: ${onHoverAnimation} 0.5s cubic-bezier(0.17, 0.86, 0.22, 0.96) 0s forwards;
  }
`;

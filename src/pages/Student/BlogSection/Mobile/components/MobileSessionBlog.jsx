import styled from 'styled-components';

function MobileSessionBlog({ selected, writeup, blogs }) {
  return (
    <Container selected={selected}>
      <ContentWrapper selected={selected}>
        <TitleSection>
          <WriteupSpan>{writeup}</WriteupSpan>
        </TitleSection>
        <BlogWrapper>
          {blogs.map((blog, idx) => {
            return (
              <BlogLink key={idx} href={blog} target="_blank" rel="noreferrer noopener nofollow">
                {blog.replace('https://', '').replace('http://', '')}
              </BlogLink>
            );
          })}
        </BlogWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default MobileSessionBlog;

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.selected ? '30vh' : '0vh')};
  will-change: height;

  position: relative;

  overflow: hidden;

  background-color: ${(props) => props.theme.backgroundColor.black};

  transition: height 0.5s cubic-bezier(0.17, 0.86, 0.22, 0.96);
  cursor: default;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 30vh;

  padding: 0 2%;

  display: grid;
  grid-template-columns: 1fr 1.5fr;

  will-change: opacity;
  opacity: ${(props) => (props.selected ? `1` : `0`)};
  transition: opacity 0.5s cubic-bezier(0.17, 0.86, 0.22, 0.96);
`;

const TitleSection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WriteupSpan = styled.span`
  font-size: 8.5vw;
  color: ${(props) => props.theme.backgroundColor.white};
`;

const BlogWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BlogLink = styled.a`
  flex: 1;
  width: 100%;
  color: ${(props) => props.theme.backgroundColor.white};
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 10px;
`;

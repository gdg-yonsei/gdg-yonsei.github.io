import styled from 'styled-components';

function Slide({ name, index }) {
  return (
    <SlideContainer>
      <DescWrapper>
        <Index>{index + 1}</Index>
        <Name>{name}</Name>
      </DescWrapper>
    </SlideContainer>
  );
}

export default Slide;

const SlideContainer = styled.div`
  width: 40vw;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-radius: 20px;
  background-color: black;
`;

const DescWrapper = styled.div`
  width: 100%;
  padding: 3% 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4vw;
`;

const Index = styled.span`
  font-size: 64px;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const Name = styled.span`
  display: inline-block;
  font-size: 36px;
  line-height: 1.2;

  color: ${(props) => props.theme.backgroundColor.white};

  white-space: nowrap;
`;

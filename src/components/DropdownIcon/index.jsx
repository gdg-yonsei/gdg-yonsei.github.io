import styled from 'styled-components';

function DropdownIcon({ setIsVisible, children }) {
  const onClickIcon = (event) => {
    event.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  return (
    <Container onClick={onClickIcon}>
      <Wrapper>
        {Array.from(Array(9).keys()).map((_, idx) => {
          return (
            <CircleWrapper key={idx}>
              <MiniCircle />
            </CircleWrapper>
          );
        })}
      </Wrapper>
      {children}
    </Container>
  );
}

export default DropdownIcon;

const Container = styled.div`
  width: 40px;
  height: 40px;

  padding: 10px;

  border-radius: 50%;

  cursor: pointer;
  transition: background-color 0.2s ease-in;
  background-color: transparent;

  position: relative;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  gap: 0;
`;

const CircleWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiniCircle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.color.darkgrey};
`;

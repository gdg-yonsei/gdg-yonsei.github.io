import styled from 'styled-components';

function SubHeader() {
  return (
    <Container>
      <Span>GDSC Yonsei 22-23</Span>
    </Container>
  );
}

export default SubHeader;

const Container = styled.div`
  width: 90%;
  padding-top: 5vh;
  padding-bottom: 2vh;

  border-bottom: 3px solid ${(props) => props.theme.lightColor.light};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.mobile`
    font-size: 14px;
  `}
`;

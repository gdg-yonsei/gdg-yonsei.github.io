import { ReactComponent as MICIcon } from '@assets/images/icons/Mic.svg';
import styled from 'styled-components';

function SearchBar() {
  return (
    <Container>
      <LeftSpan>G</LeftSpan>
      <MICIcon height={80} />
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  flex: 1;
  height: 140px;

  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 5px solid ${(props) => props.theme.backgroundColor.white};
  border-radius: 10000000000000px;

  @media screen and (max-width: 1350px) {
    flex: none;
    width: 50vw;

    height: 140px;
  }
`;

const LeftSpan = styled.span`
  font-size: 50px;
  font-weight: 400;

  color: ${(props) => props.theme.backgroundColor.white};
`;

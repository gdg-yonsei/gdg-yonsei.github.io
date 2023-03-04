import styled from 'styled-components';

function Asterisk() {
  return <AsteriskElement />;
}

export default Asterisk;

const AsteriskElement = styled.figure`
  position: relative;
  width: 2.5vw;
  height: 10vw;
  background: ${(props) => props.theme.lightColor.light};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    width: 2.5vw;
    height: 10vw;

    background: ${(props) => props.theme.lightColor.light};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(60deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-60deg);
  }
`;

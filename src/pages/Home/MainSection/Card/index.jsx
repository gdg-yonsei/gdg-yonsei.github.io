import { Link } from "react-router-dom";
import styled from "styled-components";

function Card(props) {
  return (
    <Link to={props.linkTarget}>
      <Container color={props.color}>
        <ShapeWrapper>{props.shape}</ShapeWrapper>
        <TextWrapper>
          <LeftText>{props.leftText}</LeftText>
          <RightText>{props.rightText}</RightText>
        </TextWrapper>
      </Container>
    </Link>
  );
}

export default Card;

const Container = styled.figure`
  width: 18vw;
  height: 25vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 1px solid ${(props) => props.theme.lightcolor.light};

  cursor: pointer;
  transition: background-color 1s ease-in-out;

  &:active {
    background-color: ${(props) => props.color};
  }
`;

const ShapeWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 5% 3%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LeftText = styled.span`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 40px;
`;

const RightText = styled.span`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 16px;
`;

import styled, { useTheme } from "styled-components";

function Circle({ color = "white", size = 0 }) {
  const theme = useTheme();

  const transformColor = (input) => {
    switch (input) {
      case "red":
        return theme.color.red;

      case "blue":
        return theme.color.blue;

      case "green":
        return theme.color.green;

      case "yellow":
        return theme.color.yellow;

      default:
        return input;
    }
  };

  return (
    <Container>
      <OuterElement color={transformColor(color)} size={size}>
        <InnerElement size={size} />
      </OuterElement>
    </Container>
  );
}

export default Circle;

const Container = styled.div`
  width: fit-content;
  height: fit-content;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterElement = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};

  border-radius: 50%;
`;

const InnerElement = styled.figure`
  width: ${(props) => `${props.size * 0.8}px`};
  height: ${(props) => `${props.size * 0.8}px`};

  background-color: ${(props) => props.theme.backgroundColor.white};

  border-radius: 50%;
`;

import styled from "styled-components";

function Button(props) {
  return <Element>{props.children}</Element>;
}

export default Button;

const Element = styled.button`
  color: #404040;

  margin: 11px 4px;
  padding: 8px 16px;
  min-width: 54px;

  background-color: ${(props) => props.theme.backgroundColor.button};
  border: 1px solid ${(props) => props.theme.backgroundColor.button};
  border-radius: 6px;

  text-align: center;

  cursor: pointer;
  user-select: none;

  font-family: "Roboto", sans-serif;

  &:hover {
    border: 1px solid ${(props) => props.theme.color.lightgrey};
  }
`;

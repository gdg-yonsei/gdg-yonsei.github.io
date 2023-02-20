import { useCallback } from "react";
import styled from "styled-components";

function SessionCard({
  index,
  title,
  selectedIndex,
  setSelectedIndex,
  children,
}) {
  const handleCardClick = useCallback(() => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  }, [index, selectedIndex, setSelectedIndex]);

  return (
    <TitleContainer onClick={handleCardClick}>
      <NumberingSpan>{`0${index + 1}.`}</NumberingSpan>
      <TitleSpan>{`${title}`}</TitleSpan>
      {children}
    </TitleContainer>
  );
}

export default SessionCard;

const TitleContainer = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 2%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1vw;

  border-left: 5px solid ${(props) => props.theme.backgroundColor.black};

  cursor: pointer;
`;

const NumberingSpan = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.backgroundColor.black};

  font-size: 3.5vh;
  font-weight: 300;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  padding: 2vh 0;
`;

const TitleSpan = styled.span`
  display: inline-block;
  color: black;

  font-size: 5.5vh;
  font-weight: 500;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  padding: 2vh 0;
`;

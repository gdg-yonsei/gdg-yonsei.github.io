import { useCallback } from 'react';
import styled from 'styled-components';

function MobileSessionCard({ index, title, selectedIndex, setSelectedIndex }) {
  const onClickCard = useCallback(() => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  }, [index, selectedIndex, setSelectedIndex]);

  return (
    <TitleContainer onClick={onClickCard} isSelected={index === selectedIndex}>
      <NumberingSpan>{`0${index + 1}.`}</NumberingSpan>
      <TitleSpan>{`${title}`}</TitleSpan>
    </TitleContainer>
  );
}

export default MobileSessionCard;

const TitleContainer = styled.article`
  flex: 1;
  height: 100%;
  width: 100%;

  padding: 0 5vw;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7.5vw;

  border-top: 5px solid ${(props) => props.theme.backgroundColor.black};

  cursor: pointer;
`;

const NumberingSpan = styled.span`
  display: inline-block;
  font-size: 10vw;
  font-weight: 300;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const TitleSpan = styled.span`
  display: inline-block;

  font-size: 5vw;
  color: ${(props) => props.theme.backgroundColor.black};
  font-weight: 500;
`;

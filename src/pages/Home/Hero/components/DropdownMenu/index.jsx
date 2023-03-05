import { MdChevronRight } from '@react-icons/all-files/md/MdChevronRight';
import styled from 'styled-components';

function DropdownMenu({ Icon, description, href }) {
  return (
    <MenuWrapper href={href} target="_blank" rel="noreferrer noopener">
      <IconWrapper>{Icon}</IconWrapper>
      <DescriptionWrapper>
        <MenuDesc>{description}</MenuDesc>
      </DescriptionWrapper>
      <ChevronRightIcon />
    </MenuWrapper>
  );
}

export default DropdownMenu;

const MenuWrapper = styled.a`
  width: 100%;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  padding: 20px 10px;

  background-color: transparent;
  border-radius: 10px;

  cursor: pointer;
  text-decoration: none;

  background-color: transparent;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor.gray};
    svg {
      opacity: 1;
      transform: none;
    }
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuDesc = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const ChevronRightIcon = styled(MdChevronRight)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5%;

  font-size: 30px;
  opacity: 0;

  transform: translateX(-10px);

  transition: all 0.3s ease-out;

  path {
    fill: black;
  }
`;

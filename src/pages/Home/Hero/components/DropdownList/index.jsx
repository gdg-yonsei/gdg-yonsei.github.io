import { ReactComponent as SiNotion } from '@assets/images/icons/notion.svg';
import { forwardRef } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu';

function DropdownList() {
  return (
    <Container>
      <Menus>
        <DropdownMenu
          Icon={<NotionIcon />}
          description={'GDSC Notion'}
          href={'https://gdsc-yonsei.notion.site/'}
        />
      </Menus>
    </Container>
  );
}

export default forwardRef(DropdownList);

const Container = styled.div`
  width: 275px;
  max-height: 350px;

  padding: 20px;

  position: absolute;
  top: 70px;
  right: 130px;
  z-index: 3000;

  border: 1px solid ${(props) => props.theme.color.lightgrey};
  border-radius: 8px;

  background-color: ${(props) => props.theme.backgroundColor.white};

  font-family: 'Roboto';
`;

const Menus = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const NotionIcon = styled(SiNotion)`
  width: 36px;
  height: 36px;
  path {
    fill: ${(props) => props.theme.backgroundColor.black};
  }
`;

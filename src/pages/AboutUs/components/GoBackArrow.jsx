import DelayedLink from '@components/DelayedLink';
import { TRANSITION_DURATION } from '@constants/constants';
import { HiOutlineArrowLeft } from '@react-icons/all-files/hi/HiOutlineArrowLeft';
import styled from 'styled-components';

function GoBackArrow() {
  return (
    <Container data-scroll data-scroll-sticky data-scroll-target="#aboutus-container">
      <DelayedLink to={'/'} delay={TRANSITION_DURATION}>
        <ArrowLeftIcon />
      </DelayedLink>
    </Container>
  );
}

export default GoBackArrow;

const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  z-index: 50;

  ${({ theme }) => theme.mobile`
    top: 20px;
    left: 20px;
  `}
`;

const ArrowLeftIcon = styled(HiOutlineArrowLeft)`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 36px;

  ${({ theme }) => theme.mobile`
    font-size: 24px;
  `}
`;

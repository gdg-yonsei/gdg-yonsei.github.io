import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function DelayedLink({ to, delay, children }) {
  const navigate = useNavigate();

  const delayAndNavigate = (event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate(`${to}`, { replace: true });
    }, delay);
  };

  return (
    <StyledLink to={to} onClick={delayAndNavigate}>
      {children}
    </StyledLink>
  );
}

export default DelayedLink;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

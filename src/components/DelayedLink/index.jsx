import { Link, useNavigate } from "react-router-dom";

function DelayedLink({ to, delay, children }) {
  const navigate = useNavigate();

  const delayAndNavigate = (event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate(`${to}`);
    }, delay);
  };

  return (
    <Link to={to} onClick={delayAndNavigate}>
      {children}
    </Link>
  );
}

export default DelayedLink;

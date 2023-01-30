import useIdle from "@hooks/useIdle";
import { Helmet } from "react-helmet-async";

function Head() {
  const idleState = useIdle(3e3);

  return (
    <Helmet>
      {!idleState ? <title>GDSC - YS</title> : <title>👋 Are you there?</title>}
    </Helmet>
  );
}

export default Head;

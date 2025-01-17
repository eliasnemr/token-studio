import useFirstVisit from "../../hooks/useFirstVisit.tsx";
import { Navigate } from "react-router-dom";

const RootRedirect = () => {
  const { firstTime, isLoading } = useFirstVisit();

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return firstTime ? (
    <Navigate to="/intro" replace />
  ) : (
    <Navigate to="/studio" replace />
  );
};

export default RootRedirect;

import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PriviteRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return <span>Loading.......</span>;
  }

  if (user === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PriviteRoutes;

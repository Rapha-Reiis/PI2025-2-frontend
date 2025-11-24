import useAuth from '@hooks/useAuth';
import { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { userData, userLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoading) return;
    if (!userData) return;
    console.log(userData);
  }, [userLoading, userData]);

  if (userData === null) {
    return null;
  }

  if (userData.email_verified === false) {
    navigate('/verify-email');
  }

  return userData ? <Outlet /> : <Navigate to='/start/login' />;
};

export { ProtectedRoutes };

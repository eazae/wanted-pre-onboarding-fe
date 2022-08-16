import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm, SignupForm } from '../components/Main';

export const MainPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Assignment3
  const checkTokenExists = () => {
    const token = localStorage.getItem('access_token');
    return token !== null;
  };

  useEffect(() => {
    if (checkTokenExists()) navigate('/todo', { replace: true });
  }, []);

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  return <>{isLogin ? <LoginForm /> : <SignupForm />}</>;
};

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoginForm, SignupForm } from '../components/Main';

export const MainPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  return <>{isLogin ? <LoginForm /> : <SignupForm />}</>;
};

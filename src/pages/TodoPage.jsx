import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TodoPage = () => {
  let navigate = useNavigate();

  const checkTokenExists = () => {
    const token = localStorage.getItem('access_token');
    return token !== null;
  };

  useEffect(() => {
    if (!checkTokenExists()) navigate('/', { replace: true });
  }, []);

  return (
    <>
      <div>TODO</div>
    </>
  );
};

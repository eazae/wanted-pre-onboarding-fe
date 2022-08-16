import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenExists } from '../utils/utils';

export const TodoPage = () => {
  let navigate = useNavigate();

  // Assignment1
  useEffect(() => {
    if (!checkTokenExists()) navigate('/', { replace: true });
  }, []);

  return (
    <>
      <div>TODO</div>
    </>
  );
};

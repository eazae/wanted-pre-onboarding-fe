import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos } from '../api/todoAPI';
import { Title } from '../commons';
import { NewItemInput } from '../components/Todo/NewItemInput';
import { TodoListItem } from '../components/Todo/TodoListItem';
import { checkTokenExists } from '../utils/utils';

export const TodoPage = () => {
  let navigate = useNavigate();
  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await getTodos();
    console.log(response.data);
    if (response) {
      setList(response.data);
    }
  };

  useEffect(() => getList, []);

  // Assignment3
  useEffect(() => {
    if (!checkTokenExists()) navigate('/', { replace: true });
  }, []);

  return (
    <>
      <Title>TODO 리스트</Title>
      <NewItemInput refreshList={getList} />
      {list ? list.map((item, index) => <TodoListItem key={item.id} item={item} />) : null}
    </>
  );
};

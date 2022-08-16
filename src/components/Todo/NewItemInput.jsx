import { useState } from 'react';
import { createTodo } from '../../api/todoAPI';
import { Button, Divider, Input } from '../../commons';

export const NewItemInput = ({ refreshList }) => {
  const [content, setContent] = useState('');

  const addItem = async () => {
    const response = await createTodo(content);
    // console.log(response);
    if (response.status === 201) {
      refreshList();
      setContent('');
    } else {
      alert(response);
    }
  };

  return (
    <>
      <Input
        placeholder="입력"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></Input>
      <Divider />
      <Button onClick={addItem}>추가</Button>
    </>
  );
};

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck as CheckIcon } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as UncheckIcon } from '@fortawesome/free-regular-svg-icons';
import { Divider, TextButton } from '../../commons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 10px 0px;
`;

const ButtonGroup = styled.span`
  align-items: flex-start;
`;

const Content = styled.text`
  color: gray;
  font-family: 'Verdana';
`;

export const TodoListItem = ({ item }) => {
  return (
    <>
      <Container>
        <ButtonGroup>
          {item.isCompleted ? (
            <FontAwesomeIcon icon={CheckIcon} size="lg" />
          ) : (
            <FontAwesomeIcon icon={UncheckIcon} size="lg" />
          )}
          <Divider />
          <Divider />
          <Content>{item.todo}</Content>
        </ButtonGroup>
        <ButtonGroup>
          <TextButton>수정</TextButton>
          <TextButton>삭제</TextButton>
        </ButtonGroup>
      </Container>
    </>
  );
};

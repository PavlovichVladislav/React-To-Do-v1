import { FC } from 'react';
import { ITaskItem } from '../../types/ToDo';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

type ToDoListProps = {
    tasksList: ITaskItem[]
}

const ToDoList: FC<ToDoListProps> = ({ tasksList }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

export default ToDoList;
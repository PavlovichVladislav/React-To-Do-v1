import { FC } from 'react';

import './ToDoItem.css';

type ToDoItemProps = {
    text: string;
    isCompleted: boolean;
}

const ToDoItem: FC<ToDoItemProps> = ({ text, isCompleted }) => (
  <li className="todo-item">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" />
  </li>
);

export default ToDoItem;
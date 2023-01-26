import { FC } from 'react';

import './Input.css';

type ToDoInputProps = {
    value: string;
    onChange: () => void;
}
const ToDoInput: FC<ToDoInputProps> = ({ value, onChange }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
    />
  </div>
);

export default ToDoInput;
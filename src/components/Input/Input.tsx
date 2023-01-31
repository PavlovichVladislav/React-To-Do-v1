import { ChangeEvent, FC, KeyboardEvent } from 'react';

import './Input.css';

type ToDoInputProps = {
    value: string;
    onChange: ({target: {value}}: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: ({key}: KeyboardEvent<HTMLInputElement>) => void
}
const ToDoInput: FC<ToDoInputProps> = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyUp={onKeyPress}
    />
  </div>
);

export default ToDoInput;
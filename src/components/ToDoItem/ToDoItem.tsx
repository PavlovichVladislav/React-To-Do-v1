import { FC } from "react";

import "./ToDoItem.css";

type ToDoItemProps = {
   id: number;
   text: string;
   isCompleted: boolean;
   removeTask: (id: number) => { type: string; id: number };
   completeTask: (id: number) => { type: string; id: number };
};

const ToDoItem: FC<ToDoItemProps> = ({
   id,
   text,
   isCompleted,
   removeTask,
   completeTask,
}) => (
   <li className="todo-item">
      <i
         className={
            isCompleted ? "mark far fa-check-circle" : "mark far fa-circle"
         }
         onClick={() => completeTask(id)}
      />
      <span className={isCompleted ? "completed text" : "text"}>{text}</span>
      <i className="fas fa-times" onClick={() => removeTask(id)} />
   </li>
);

export default ToDoItem;

import { FC } from "react";
import { ITaskItem } from "../../types/ToDo";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

type ToDoListProps = {
   tasksList: ITaskItem[];
   removeTask: (id: number) => { type: string; id: number };
   completeTask: (id: number) => {type: string; id: number};
};

const ToDoList: FC<ToDoListProps> = ({ tasksList, removeTask, completeTask }) => (
   <ul className="todo-list">
      {tasksList.map(({ id, text, isCompleted }) => (
         <ToDoItem
            id={id}
            key={id}
            text={text}
            isCompleted={isCompleted}
            removeTask={removeTask}
            completeTask={completeTask}
         />
      ))}
   </ul>
);

export default ToDoList;

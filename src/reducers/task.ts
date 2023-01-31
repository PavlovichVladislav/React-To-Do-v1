import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../constants";
import { ITaskItem } from "../types/ToDo";
import { Reducer } from 'redux';
import { taskAction } from "../actions/actionTypes";

export const TASKS: ITaskItem[] = [
   {
      id: 1,
      text: "Learn ReactJS",
      isCompleted: true,
   },
   {
      id: 2,
      text: "Learn Redux",
      isCompleted: false,
   },
   {
      id: 3,
      text: "Learn React Router",
      isCompleted: false,
   },
];

const tasks: Reducer<ITaskItem[], taskAction> = (
   state = TASKS,
   {
      id,
      text,
      isCompleted,
      type,
   }
) => {
   switch (type) {
      case ADD_TASK:
         return [
            ...state,
            {
               id,
               text,
               isCompleted,
            },
         ];
      case REMOVE_TASK:
         return [...state].filter((task) => task.id !== id);
      case COMPLETE_TASK: 
         return state.map(task => {
            if (task.id !== id) return task;

            return {...task, isCompleted: !task.isCompleted}
         })
      default:
         return [...state];
   }
};

export default tasks;
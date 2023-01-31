import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../constants";

export const addTask = (id: number, text: string, isCompleted: boolean) => ({
   type: ADD_TASK,
   id,
   text,
   isCompleted,
});

export const removeTask = (id: number) => ({
   type: REMOVE_TASK,
   id,
});

export const completeTask = (id: number) => ({
    type: COMPLETE_TASK,
    id
})
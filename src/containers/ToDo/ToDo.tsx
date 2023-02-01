import { ChangeEvent, Component, KeyboardEvent } from "react";
import { connect } from "react-redux";

import {
   addTask,
   removeTask,
   completeTask,
   changeFilter,
} from "../../actions/actionCreator";

import Footer from "../../components/Footer/Footer";
import ToDoInput from "../../components/Input/Input";
import ToDoList from "../../components/ToDoList/ToDoList";

import "./ToDo.css";
import { ITaskItem } from "../../types/ToDo";
import { RootState } from "../../store";
import { taskAction } from "../../actions/actionTypes";

type ToDoState = {
   taskText: string;
};

type ToDoProps = {
   tasks: ITaskItem[];
   filter: string;
   addTask: (id: number, text: string, isCompleted: boolean) => taskAction;
   removeTask: (id: number) => { type: string; id: number };
   completeTask: (id: number) => { type: string; id: number };
   changeFilter: (activeFilter: string) => {
      type: string;
      activeFilter: string;
   };
};

class ToDo extends Component<ToDoProps, ToDoState> {
   state = {
      taskText: "",
   };

   handleInputChange = ({
      target: { value },
   }: ChangeEvent<HTMLInputElement>) => {
      this.setState({
         taskText: value,
      });
   };

   addTask = ({ key }: KeyboardEvent<HTMLInputElement>) => {
      const { taskText } = this.state;

      if (taskText.length > 3 && key === "Enter") {
         const { addTask } = this.props;

         addTask(new Date().getTime(), taskText, false);

         this.setState({
            taskText: "",
         });
      }
   };

   filterTaks = (tasks: ITaskItem[], filter: string) => {
      switch (filter) {
         case "completed":
            return tasks.filter((task) => task.isCompleted);
         case "active":
            return tasks.filter((task) => !task.isCompleted);
         default:
            return tasks;
      }
   };

   getActiveTasksCount = (tasks: ITaskItem[]): number => {
      return tasks.reduce((activeTasksCount: number, currentTask) => {
         if (!currentTask.isCompleted) activeTasksCount += 1;
         return activeTasksCount;
      }, 0);
   };

   render() {
      const { taskText } = this.state;
      const { tasks, removeTask, completeTask, filter, changeFilter } =
         this.props;
      const isTasksExist = tasks && tasks.length > 0;
      const filteredTasks = this.filterTaks(tasks, filter);
      const tasksAmount = this.getActiveTasksCount(filteredTasks);

      return (
         <div className="todo-wrapper">
            <ToDoInput
               onKeyPress={this.addTask}
               value={taskText}
               onChange={this.handleInputChange}
            />
            {isTasksExist && (
               <ToDoList
                  tasksList={filteredTasks as ITaskItem[]}
                  removeTask={removeTask}
                  completeTask={completeTask}
               />
            )}
            {isTasksExist && (
               <Footer
                  amount={tasksAmount}
                  activeFilter={filter}
                  changeFilter={changeFilter}
               />
            )}
         </div>
      );
   }
}

export default connect(
   ({ tasks, filter }: RootState) => ({
      tasks,
      filter,
   }),
   { addTask, removeTask, completeTask, changeFilter }
)(ToDo);

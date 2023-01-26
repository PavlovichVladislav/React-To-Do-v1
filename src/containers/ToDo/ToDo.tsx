import { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import ToDoInput from '../../components/Input/Input';
import ToDoList from '../../components/ToDoList/ToDoList';
import { ITaskItem } from '../../types/ToDo';

import './ToDo.css';

const TASKS: ITaskItem[] = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

class ToDo extends Component {

  state = {
    activeFilter: 'all',
  }

  render() {
    const { activeFilter } = this.state;
    const tasksList = TASKS;
    const isTasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput value='' onChange={() => {}} />
        {isTasksExist && <ToDoList tasksList={TASKS} />}
        {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default ToDo;
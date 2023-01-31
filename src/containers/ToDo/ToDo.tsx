import { ChangeEvent, Component, KeyboardEvent } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask } from '../../actions/actionCreator';

import Footer from '../../components/Footer/Footer';
import ToDoInput from '../../components/Input/Input';
import ToDoList from '../../components/ToDoList/ToDoList';

import './ToDo.css';
import { ITaskItem } from '../../types/ToDo';
import { RootState } from '../../store';
import { taskAction } from '../../actions/actionTypes';

type ToDoState = {
  activeFilter: string;
  taskText: string;
}

type ToDoProps = {
  tasks: ITaskItem[];
  addTask: (id: number, text: string, isCompleted: boolean) => taskAction;
  removeTask: (id: number) => {type: string; id: number};
  completeTask: (id: number) => {type: string; id: number};
}

class ToDo extends Component<ToDoProps, ToDoState> {
  state = {
    activeFilter: 'all',
    taskText: ''
  }

  handleInputChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      taskText: value
    })
  }

  addTask = ({key}: KeyboardEvent<HTMLInputElement>) => {
    const {taskText} = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: ''
      })
    }
  }

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks, removeTask, completeTask } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} value={taskText} onChange={this.handleInputChange} />
        {isTasksExist && <ToDoList tasksList={tasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect((state: RootState) => ({
  tasks: state.tasks,
}), { addTask, removeTask, completeTask })(ToDo);
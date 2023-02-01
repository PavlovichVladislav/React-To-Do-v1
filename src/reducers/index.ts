import { combineReducers } from "@reduxjs/toolkit";
import tasks from "./task";
import filter from './filters';

const rootReducer = combineReducers({tasks, filter});

export default rootReducer;
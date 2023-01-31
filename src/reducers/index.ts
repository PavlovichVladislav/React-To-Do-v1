import { combineReducers } from "@reduxjs/toolkit";
import tasks from "./task";

const rootReducer = combineReducers({tasks});

export default rootReducer;
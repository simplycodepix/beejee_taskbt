import { combineReducers } from 'redux';
import tasks from './taskReducer';
import session from './sessionReducer';

const reducers = combineReducers({
    tasks,
    session
});

export default reducers;
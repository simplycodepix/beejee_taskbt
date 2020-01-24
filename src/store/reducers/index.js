import { combineReducers } from 'redux';
import tasks from './taskReducer';
import session from './sessionReducer';
import error from './errorReducer';

const reducers = combineReducers({
    tasks,
    session,
    error
});

export default reducers;
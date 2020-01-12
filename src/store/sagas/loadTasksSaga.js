import { takeEvery, put, select } from 'redux-saga/effects';
import { LOAD_TASKS, SET_FILTER } from '../types';
import { setTasks } from '../actions/taskActions';

import axios from 'axios';

const getFilterInfo = (state) => state.tasks.filter;

export function* loadTasksSaga() {
    try {
        const filters = yield select(getFilterInfo);

        const { data } = yield axios.get(`${process.env.REACT_APP_API_URL}?developer=Godunov`, { params: filters });
        const { tasks, total_task_count } = data.message;

        yield (put(setTasks(tasks, total_task_count)));
    } catch (error) {
        console.log(error);
    }
}

export function* watchLoadTasksRequest() {
    yield takeEvery([LOAD_TASKS, SET_FILTER], loadTasksSaga);
}
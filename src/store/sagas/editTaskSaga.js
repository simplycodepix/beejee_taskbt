import { takeEvery, put } from 'redux-saga/effects';
import { EDIT_TASK } from "../types";
import { loadTasks } from '../actions/taskActions';
import axios from 'axios';
import { logoutUser } from '../actions/authActions';

export function* editTaskSaga(action) {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            yield put(logoutUser());
        }

        const { task } = action;

        let form = new FormData();
        form.append("text", task.text);
        form.append("status", task.status);
        form.append("token", token);

        const { data } = yield axios.post(`${process.env.REACT_APP_API_URL}edit/${task.id}/?developer=Godunov`, form);

        if (data.status === 'ok') yield put(loadTasks());
    } catch (error) {
        console.log(error);
    }
}

export function* watchEditTaskRequest() {
    yield takeEvery(EDIT_TASK, editTaskSaga);
}
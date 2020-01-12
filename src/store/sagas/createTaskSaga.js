import { takeEvery, put } from 'redux-saga/effects';
import { CREATE_TASK } from "../types";
import axios from 'axios';
import { loadTasks, setErrors, processCreateTask } from '../actions/taskActions';

export function* createTaskSaga(formData) {
    try {
        yield put(setErrors());
        
        let form = new FormData();
        form.append("username", formData.username);
        form.append("email", formData.email);
        form.append("text", formData.text);

        const { data } = yield axios.post(`${process.env.REACT_APP_API_URL}create?developer=Godunov`, form, { crossDomain: true });

        if (data.status === 'error') {
            yield put(setErrors(data.message));

            return;
        }

        yield put(processCreateTask(`Задание успешно добавлено`));
        yield put(loadTasks());
    } catch (error) {
        console.log(error);
    }
}

export function* watchCreateTaskRequest() {
    yield takeEvery(CREATE_TASK, createTaskSaga);
}
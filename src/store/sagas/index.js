import { fork, all } from 'redux-saga/effects';
import { watchLoadTasksRequest } from './loadTasksSaga';
import { watchCreateTaskRequest } from './createTaskSaga';
import { watchEditTaskRequest } from './editTaskSaga';
import { watchAuthRequest, watchLogoutRequest } from './authSaga';

export function* rootSaga() {
    yield all([
        fork(watchLoadTasksRequest),
        fork(watchCreateTaskRequest),
        fork(watchEditTaskRequest),
        fork(watchAuthRequest),
        fork(watchLogoutRequest)
    ])
}
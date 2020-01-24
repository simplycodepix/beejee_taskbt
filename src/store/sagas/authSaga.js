import { takeEvery, put } from 'redux-saga/effects';
import { AUTH_USER, LOGOUT_USER, AUTH_USER_FAILED } from '../types';
import axios from 'axios';
import { setUser } from '../actions/authActions';
import { setError } from '../actions/errorActions';

export function* authSaga(authData) {
    try {
        let form = new FormData();
        form.append("username", authData.username);
        form.append("password", authData.password);

        const { data } = yield axios.post(
            `${process.env.REACT_APP_API_URL}login/?developer=Godunov`,
            form
        );

        if (data.status === 'error') {
            localStorage.removeItem('token');
            
            yield put(setUser(false));
            yield put(setError({
                type: AUTH_USER_FAILED,
                error: data.message
            }))

            return;
        }

        const { token } = data.message;

        localStorage.setItem('token', token);
        yield put(setUser(true));
    } catch (error) {
        console.log(error);
    }
}

export function* logoutSaga() {
    try {
        localStorage.removeItem('token');
        yield put(setUser(false));
    } catch (error) {
        console.log(error);
    }
}

export function* watchAuthRequest() {
    yield takeEvery(AUTH_USER, authSaga);
}

export function* watchLogoutRequest() {
    yield takeEvery(LOGOUT_USER, logoutSaga);
}
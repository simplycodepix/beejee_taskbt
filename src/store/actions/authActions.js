import { AUTH_USER, SET_USER, LOGOUT_USER, SET_ERROR, REMOVE_ERROR } from "../types";

export const authUser = (payload) => ({
    type: AUTH_USER,
    ...payload
});

export const setUser = (authenticated, errors = {}) => ({
    type: SET_USER,
    authenticated,
    errors
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});
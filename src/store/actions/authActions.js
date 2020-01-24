import { AUTH_USER, SET_USER, LOGOUT_USER } from "../types";

export const authUser = (payload) => ({
    type: AUTH_USER,
    ...payload
});

export const setUser = (authenticated) => ({
    type: SET_USER,
    authenticated
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});
import { REMOVE_ERRORS } from "../types";

export const setError = ({ type, error = {} }) => ({
    type,
    error
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});
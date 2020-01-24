import { REMOVE_ERRORS } from "../types";

const ErrorReducer = {
    defaultState: {}
};

export default function error(state = ErrorReducer.defaultState, action) {
    const { type, error } = action;

    if (type === REMOVE_ERRORS)
        return ErrorReducer.defaultState;

    const isFailedRequest = type.includes('_FAILED');

    const isError = isFailedRequest && Object.keys(error).length > 0;

    if (isError === false) return state;

    return { ...state, [type]: error };
}
import { SET_USER, SET_ERROR, REMOVE_ERROR } from "../types";

const defaultState = {
    session: {
        authenticated: false,
        errors: {}
    }
}

export default function session(state = defaultState.session, action) {
    const { type } = action;

    switch (type) {
        case SET_USER:
            return { ...state, authenticated: action.authenticated, errors: action.errors }
        default:
            return state;
    }
}
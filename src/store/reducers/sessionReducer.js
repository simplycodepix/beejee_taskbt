import { SET_USER } from "../types";

const defaultState = {
    session: {
        authenticated: false
    }
}

export default function session(state = defaultState.session, action) {
    const { type } = action;

    switch (type) {
        case SET_USER:
            return { ...state, authenticated: action.authenticated }
        default:
            return state;
    }
}
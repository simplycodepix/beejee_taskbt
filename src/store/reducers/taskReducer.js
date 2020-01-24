import { SET_TASKS, SET_FILTER, SET_ERROR, PROCESS_CREATE_TASK, CLEAR_MESSAGES } from "../types";

const defaultState = {
    tasks: {
        data: [],
        task_count: 0,
        filter: {
            page: 0,
            sort_field: 'id',
            sort_direction: 'asc'
        }
    }
}

export default function tasks(state = defaultState.tasks, action) {
    const { type } = action;

    switch (type) {
        case SET_TASKS:
            return { ...state, data: action.tasks, task_count: action.task_count }
        case SET_FILTER:
            return { ...state, filter: { ...action.filters } }
        case SET_ERROR:
            return { ...state, errors: action.errors }
        case PROCESS_CREATE_TASK:
            return { ...state, messageSuccess: action.message };
        case CLEAR_MESSAGES:
            return { ...state, messageSuccess: '' };
        default:
            return state;
    }
}
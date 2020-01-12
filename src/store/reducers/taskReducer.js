import { SET_TASKS, SET_FILTER, SET_ERROR, CREATE_TASK, PROCESS_CREATE_TASK } from "../types";

const defaultState = {
    tasks: {
        data: [],
        errors: {},
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
        default:
            return state;
    }
}
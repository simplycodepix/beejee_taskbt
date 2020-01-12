import * as types from '../types';

export const loadTasks = () => ({
    type: types.LOAD_TASKS
});

export const setTasks = (tasks, task_count) => ({
    type: types.SET_TASKS,
    tasks,
    task_count
});

export const createTask = (payload) => ({
    type: types.CREATE_TASK,
    ...payload
});

export const setTaskCreationError = (errors) => ({
    type: types.TASK_CREATION_ERROR,
    errors
});

export const editTask = (task) => ({
    type: types.EDIT_TASK,
    task
});

export const processCreateTask = (message, errors = {}) => ({
    type: types.PROCESS_CREATE_TASK,
    message,
    errors
});

export const setFilters = (filters) => ({
    type: types.SET_FILTER,
    filters
})

export const setErrors = (errors = {}) => ({
    type: types.SET_ERROR,
    errors
});
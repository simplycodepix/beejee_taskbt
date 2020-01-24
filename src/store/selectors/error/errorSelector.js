import { createSelector } from 'reselect';

export const errorTextSelector = (errorState, actionTypes) => {
    const errorText = errorState[actionTypes];

    return errorText ? errorText : {};
};

export const selectErrorText = createSelector(
    (state) => state.error,
    (state, actionTypes) => actionTypes,
    errorTextSelector
);
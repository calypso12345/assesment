import { createSelector } from "@ngrx/store";
import { AppState } from "../model/index";
 
export const selectAll = (state:  {store: AppState}) => state;

export const getOperator = createSelector(selectAll, (state: {store: AppState}) => {
    return state.store.operator;
});
export const getErrors = createSelector(selectAll, (state: {store: AppState}) => {
    return state.store.errors;
});
export const getOperand = createSelector(selectAll, (state: {store: AppState}) => {
    return state.store.operand;
});
export const getResult = createSelector(selectAll, (state: {store: AppState}) => {
    return state.store.result;
});
export const getCalculation = createSelector(selectAll, (state: {store: AppState}) => {
    const calculationObject = {
        operand: state.store.operand,
        operation: state.store.operator
    }
    return calculationObject;
});
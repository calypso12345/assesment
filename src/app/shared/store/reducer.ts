import {StoreActions, StoreActionTypes} from './actions';
import { AppState, Errors } from '../model/index';
import { ErrorsManager } from '../errors/Errors';

const initialState: AppState = {
    operator: {operation: ''},
    operand: [],
    result: 0,
    errors: []
}

const ErrorMgr:ErrorsManager = new ErrorsManager();

export function reducer(state: AppState = initialState, action: StoreActions) {
    switch (action.type) {
        case StoreActionTypes.UpdateOperation:
            return {
                ...state,
                operator: action.payload
            }
        
        case StoreActionTypes.UpdateOperand:
            return {
                ...state,
                operand: action.payload
            }

        case StoreActionTypes.UpdateResult:
            return {
                ...state,
                result: action.payload
            }

        case StoreActionTypes.ValidateErrors:
            const errArray: Errors[] = ErrorMgr.validateErrors(JSON.parse(JSON.stringify(state)));
            return {
                ...state,
                errors: errArray
            }

        default:
            return state;
    }
}
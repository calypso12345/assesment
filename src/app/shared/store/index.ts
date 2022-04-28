import { reducer } from './reducer';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<any, any> = {
    store: reducer
};
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, CalculationObject, Errors, Operand, Operation } from '../model';
import * as AppActions from './actions';
import * as AppSelectors from '../../shared/store/selector';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class StoreService {

    constructor(private store$: Store<{store: AppState}>){
    }

    selectOperation(operator: Operation): void {
        this.store$.dispatch(new AppActions.UpdateOperation(operator))
    } 

    getOperator(): Observable<Operation> {
        return this.store$.pipe(select(AppSelectors.getOperator));
    }

    updateOperand(value: Operand[]): void {
        this.store$.dispatch(new AppActions.UpdateOperand(value))
    } 

    getOperand(): Observable<Operand[]> {
        return this.store$.pipe(select(AppSelectors.getOperand));
    }

    addResult(value: number): void {
        this.store$.dispatch(new AppActions.UpdateResult(value))
    } 

    getResult(): Observable<number> {
        return this.store$.pipe(select(AppSelectors.getResult));
    }

    getCalculationObject(): Observable<CalculationObject> {
        return this.store$.pipe(select(AppSelectors.getCalculation))
    }

    validateErrors(): void {
        this.store$.dispatch(new AppActions.ValidateErrors())
    }

    getErrors(): Observable<Errors[]> {
        return this.store$.pipe(select(AppSelectors.getErrors))
    }
}

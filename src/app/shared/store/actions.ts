import { Action } from '@ngrx/store';
import { Operand, Operation } from '../model';

export enum StoreActionTypes {
    UpdateOperation = '[UpdateOperation] Update Operation',
    ValidateErrors = '[Validate Errors] Validate Errors array',
    UpdateOperand = '[Update Operand] Update Operand',
    UpdateResult = '[Update Result] Update Result',
  }

  export class UpdateOperation implements Action {
    readonly type = StoreActionTypes.UpdateOperation;
  
    constructor(public payload: Operation) {
    }
  }
  
  export class ValidateErrors implements Action {
    readonly type = StoreActionTypes.ValidateErrors;
  
  }

  export class UpdateOperand implements Action {
    readonly type = StoreActionTypes.UpdateOperand;
  
    constructor(public payload: Operand[]) {
    }
  }

  export class UpdateResult implements Action {
    readonly type = StoreActionTypes.UpdateResult;
  
    constructor(public payload: number) {
    }
  }
  
  export type StoreActions = 
  | UpdateOperation
  | ValidateErrors
  | UpdateOperand
  | UpdateResult;
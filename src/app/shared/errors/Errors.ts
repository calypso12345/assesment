import { AppState, Errors, Operand } from "../model";

const enum Messages {
    operation = 'Operation wasn\'t selected ',
    operand = 'Operand wasn\'t placed ',
    result = 'Result wasn\'t calculated',
    divisionByZero = 'Operation Not permited division by 0.'
}

export class ErrorsManager {

    createError(type: string): Errors {
        return {
            type : type,
            message: this.getMessageType(type)
        }
    }

    getMessageType(type: string) {
        let message = '';
        switch (type) {
            case "operation":
                message = Messages.operation;
                break; 
            case "operand":
                message = Messages.operand;
                break; 
            case "result": 
                message = Messages.result; 
                break;  
            case "divisionByZero":
                message = Messages.divisionByZero;
                break;                                                                                                       
        }
        return message;
    }

    removeErrors = (type: string, errors: Errors[]): Errors[] => {
        let errorsArray: Errors[] = JSON.parse(JSON.stringify(errors));
        errorsArray.map((value, index)=>{
            if (value.type === type){
                errorsArray.splice(index, 1)
            }
        })
        return errorsArray;
    }
 
    findError = (errors: Errors[], type: string): boolean => {
        let error = errors.find((error) => {
            return error.type === type;
        });
        return !error ? false : true;
    }

    validateErrors = (state: AppState): Errors[] => {
        let errors:Errors[] = [];
        const operand: Operand[] = state.operand;
        operand.map((value: Operand) => {
            if ( value.value === 0 && state.operator.operation === '/' ){
                errors.push(this.createError("divisionByZero"));
            }
            if ( value.value === null ){
                errors.push(this.createError("operand"));
                errors.push(this.createError("result"));
            }
        })
        if (state.operand.length === 0) {
            errors.push(this.createError("operand"));
        }

        if (!state.operator.operation) {
            errors.push(this.createError("operation"));
        }
        if (state.operand.length === 0 || state.operator.operation === '') {
            errors.push(this.createError("result"));
        }
        return errors;
    }

}
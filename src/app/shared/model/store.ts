export interface Operation {
    operation: string;
}
export interface Errors {
    type: string;
    message: string;
}
export interface CalculationObject {
    operand: Operand[];
    operation: Operation;
}

export interface Operand {
    name: string;
    value: number;
}
export interface AppState {
	operator: Operation;
    operand: Operand[];
    result: 0;
    errors: Errors[];
} 

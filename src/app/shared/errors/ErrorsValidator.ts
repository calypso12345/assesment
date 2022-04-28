import { ValidatorFn, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ErrorsManager } from './Errors';

export function InputValidator(controlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const v = control.value;
    const errManager = new ErrorsManager();
    const error = errManager.createError(controlName);
    return v === null || v === undefined || v === '' ? error : null;    
  };
}
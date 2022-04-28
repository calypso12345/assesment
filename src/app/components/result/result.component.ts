import { Component, OnInit, OnDestroy, Output, Input, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Errors, CalculationObject } from '../../shared/model/index';

@Component({
  selector: 'app-result-component',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Output()
  result: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  validateErrors: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  resultSel: number | null = 0;
  @Input()
  calculationObject: CalculationObject | null = { operand: [], operation: { operation: ''}};
  @Input()
  errors: Errors[] | null = [];

  form: FormGroup = this.fb.group({
    result: this.resultSel
  });
  
  subscriptionList: Subscription = new Subscription();
 
  constructor(private fb:FormBuilder) {
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.form.get('result')?.setValue(this.resultSel);
    if ( changes.calculationObject ) {
      this.calculateResult();
    }
  }
  add(): number {
    let sum = 0;
    if ( this.calculationObject  && this.calculationObject.operand.length > 1 ) {
      let firstOperand: number = this.calculationObject.operand[0].value;
      let secondOperand: number = this.calculationObject.operand[1].value;
      this.calculationObject.operand.map(({value}, index)=>{
        if ( index === 1 ){
          sum = firstOperand + secondOperand;
        } else if ( index > 1 ) {
          sum += value;
        }
      })
    }
    return sum;
  }
  substr(): number {
    let sum = 0;
    if ( this.calculationObject && this.calculationObject.operand.length > 1 ) {
      let firstOperand: number = this.calculationObject.operand[0].value;
      let secondOperand: number = this.calculationObject.operand[1].value;
      this.calculationObject.operand.map(({value}, index)=>{
        if ( index === 1 ){
          sum = firstOperand - secondOperand;
        } else if ( index > 1 ) {
          sum -= value;
        }
      })
    }
    return sum;
  }
  division(): number {
    let sum = 0;
    if ( this.calculationObject && this.calculationObject.operand.length > 1 ) {
      let firstOperand: number = this.calculationObject.operand[0].value;
      let secondOperand: number = this.calculationObject.operand[1].value;
      this.calculationObject.operand.map(({value}, index)=>{
        if ( value!== 0 && index === 1 ){
          sum = firstOperand / secondOperand;
        } else if ( value!== 0 && index > 1 ) {
          sum /= value;
        }
      })
    }
    return sum;
  }
  multiply(): number {
    let sum = 0;
    if ( this.calculationObject && this.calculationObject.operand.length > 1 ) {
      let firstOperand: number = this.calculationObject.operand[0].value;
      let secondOperand: number = this.calculationObject.operand[1].value;
      this.calculationObject.operand.map(({value}, index)=>{
        if ( index === 1 ){
          sum = firstOperand * secondOperand;
        } else if ( index > 1 ) {
          sum *= value;
        }
      })
    }
    return sum;
  }
  sqrt(): number {
    let sum = 0;
    if ( this.calculationObject && this.calculationObject.operand.length > 0 ) {
      sum = Math.pow(this.calculationObject.operand[0].value, 2)
    }
    return sum;
  }
  calculateResult(): void {
    const enum operations {
      add = "+",
      substr = "-",
      division = "/",
      multiply = "*",
      sqrt = "sqrt"
    }
    if ( this.calculationObject && this.calculationObject.operation.operation) {
      switch ( this.calculationObject.operation.operation ) {
        case operations.add:
          this.resultSel = this.add();
          break;
        case operations.substr:
          this.resultSel = this.substr();
          break;
        case operations.division:
          this.resultSel = this.division()
          break;
        case operations.multiply:
          this.resultSel = this.multiply();
          break;
        case operations.sqrt:
          this.resultSel = this.sqrt();
      }
      console.log(this.resultSel)
      this.updateResult();
      //this.errors = [];
    }
  }
  updateResult(): void {
    if(this.resultSel){
      this.result.emit(this.resultSel);
    }
  }
  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
    this.validateErrors.emit();
  }

}

import { Component, OnInit, OnDestroy, Output, Input, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup, FormArray , AbstractControl} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Operand, Operation } from '../../shared/model/index';
import { Router } from '@angular/router';
import { InputValidator } from './../../shared/errors/ErrorsValidator';

@Component({
  selector: 'app-operand-component',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.scss']
})
export class OperandComponent implements OnInit, OnDestroy, OnChanges {
  @Output()
  operand: EventEmitter<Operand[]> = new EventEmitter<Operand[]>();
  @Output()
  validate: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  operandSel: Operand[] | null = [];
  @Input()
  operationSel: Operation | null = {operation: ''};
  controls: AbstractControl[] = [];
  form: FormGroup = this.fb.group({
    operand: this.fb.array([new FormControl(0, [InputValidator("operand")])]),
  });
  subscriptionList: Subscription = new Subscription();
 
  constructor(private fb:FormBuilder, private route:Router) {
    this.addFormControl(0);
    this.getControls();
  }
  ngOnInit(): void {
    this.subscribeToValueChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.operandSel.firstChange) {
      this.operandSel?.map((value, index) => {
        if(this.controls[index]){
          this.controls[index].setValue(value.value);
        } else {
          this.addFormControl(value.value);
        }
      })
      if ( this.operationSel?.operation !== "sqrt" && this.controls.length === 1 ) {
        this.addFormControl(0);
      }
    }
  }
  
  getControls() {
    this.controls = (this.form.get('operand') as FormArray).controls;
  }
  addFormControl(value: number) {
    const control = new FormControl(value ? value : 0, [InputValidator("operand")]);
    let formArray = this.form.get('operand') as FormArray;
    formArray.push(control);
  }
  removeFormControl(index: number): void {
    this.controls.splice(index, 1);
  }
  onSelectControl(value: Operand[]) {
    if ( value ) {
      this.operand.emit(value);
    }
  }
  cancel(): void {
    this.route.navigate(['/']); 
  }
  next(): void {
    this.route.navigate(['/result']); 
  }
  subscribeToValueChanges(): void {
    this.subscriptionList = this.form.valueChanges.subscribe((array) => {
      let operandArray: Operand[] = [];
      if ( array.operand ) {
        array.operand.map((value: number, index: number) => {
            operandArray.push({name: "Operand" + index, value: value});
        })
      }
      this.onSelectControl(operandArray);
    })
  }
  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
    this.validate.emit();
  }

}

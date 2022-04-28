import { Component, OnInit, OnDestroy, Output, Input, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder,  FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Operation } from './../../shared/model/index';
import { InputValidator } from 'src/app/shared/errors/ErrorsValidator';
@Component({
  selector: 'app-operations-component',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit, OnDestroy, OnChanges {
  @Output()
  operation: EventEmitter<Operation> = new EventEmitter<Operation>();
  @Output()
  validate: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  operationSelected: Operation | null = {operation: ''};

  form: FormGroup = this.fb.group({
    operation: new FormControl(this.operationSelected?.operation, InputValidator("operation"))
  });

  operations: string[] = [ "", "+", "-", "/", "*", "sqrt"];
  
  subscriptionList: Subscription = new Subscription();
 
  constructor(private fb:FormBuilder, private route:Router) {
  }

  ngOnInit(): void {
    this.subscribeToValueChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.form.get('operation')?.setValue(this.operationSelected?.operation);
  }
  next(): void {
    this.route.navigate(['/operand']);
  }
  onSelectOperation(operation: Operation): void {
    this.operationSelected = operation;
    if ( operation.operation !== '' ) {
      this.operation.emit(operation)
    }
  }
  subscribeToValueChanges(): void {
    this.subscriptionList = this.form.valueChanges.subscribe((operation) => {
      this.onSelectOperation(operation);
    })
  }
  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
    this.validate.emit();
  }
}

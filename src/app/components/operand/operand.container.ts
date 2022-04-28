import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs'; 
import { Operand, Operation } from 'src/app/shared/model';
import { StoreService } from 'src/app/shared/store/store.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-operand-container',
    templateUrl: 'operand.container.html'
})
export class OperandContainerComponent implements OnInit {
    operand$: Observable<Operand[]> = new Observable<Operand[]>();
    operation$: Observable<Operation> = new Observable<Operation>();
    constructor(private storeService$: StoreService){
    }
    ngOnInit() {
        this.subscribeToChange();
    }
    updateOperand($event: Operand[]): void {
        this.storeService$.updateOperand($event);
    } 
    validate(): void {
        this.storeService$.validateErrors();
    }
    subscribeToChange(): void {
        this.operand$ = this.storeService$.getOperand();
        this.operation$ = this.storeService$.getOperator();
    }
}
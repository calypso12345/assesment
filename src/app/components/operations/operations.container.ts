import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import { Errors, Operation } from 'src/app/shared/model';
import { Observable } from 'rxjs'; 
import { StoreService } from 'src/app/shared/store/store.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-operations-container',
    templateUrl: 'operations.container.html'
})
export class OperationsContainerComponent implements OnInit {
    operationSel$: Observable<Operation> = new Observable<Operation>();
    
    constructor(private storeService$: StoreService){
    }
    ngOnInit() {
        this.subscribeToChange();
    }
    selectOperation($event: Operation): void {
        this.storeService$.selectOperation($event);
    } 
    validate(): void {
        this.storeService$.validateErrors();
    }
    subscribeToChange(): void {
        this.operationSel$ = this.storeService$.getOperator();
    }
}
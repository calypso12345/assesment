import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import { CalculationObject, Errors, Operation } from 'src/app/shared/model';
import { Observable } from 'rxjs'; 
import { StoreService } from 'src/app/shared/store/store.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-result-container',
    templateUrl: 'result.container.html'
})
export class ResultContainerComponent implements OnInit {
    resultSel$: Observable<number> = new Observable<number>();
    errors$: Observable<Errors[]> = new Observable<Errors[]>();
    calculationObject$: Observable<CalculationObject> = new Observable<CalculationObject>();
    
    constructor(private storeService$: StoreService){
    }
    ngOnInit() {
        this.subscribeToChange();
    }
    updateResult($event: number): void {
        this.storeService$.addResult($event);
    }
    validateErrors(): void {
        this.storeService$.validateErrors();
    }
    subscribeToChange(): void {
        this.validateErrors();
        this.resultSel$ = this.storeService$.getResult();
        this.errors$ = this.storeService$.getErrors();
        this.calculationObject$ = this.storeService$.getCalculationObject();
    }
}
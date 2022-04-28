import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { StoreService } from './store.service';
import { AppState, Operand, Operation } from '../model';
import * as AppActions from './actions';
import * as AppSelectors from '../../shared/store/selector';

describe('Test store service', () => {
  let service: StoreService;
  let store: Store<AppState>
  beforeEach(async () => {
    TestBed.configureTestingModule({
        imports: [StoreModule.forRoot(reducers)],
        providers: [StoreService],
    });
    store = TestBed.inject(Store);
  })

  it('should create', () => {
    expect(service).toBeDefined();
  });

  describe('Update Operand', () => {
    it('should dispatch update operand', () => {
      const operand: Operand[] = [{name: "Operand1", value: 5}]
      const expectedAction = new AppActions.UpdateOperand(operand);
      spyOn(store, 'dispatch').and.callThrough();
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Get Operand', () => {
    it('should select operand', () => {
        expect(AppSelectors.getOperand.projector()).toBe([]);
    });
  });

  describe('Update Operation', () => {
    it('should dispatch update operation', () => {
      const operation: Operation = {operation: ""};
      const expectedAction = new AppActions.UpdateOperation(operation);
      spyOn(store, 'dispatch').and.callThrough();
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Get Operation', () => {
    it('should select opearation', () => {
        expect(AppSelectors.getOperator.projector()).toBe({operation: ''});
    });
  });

  describe('Update Result', () => {
    it('should dispatch update result', () => {
      const result = 0;
      const expectedAction = new AppActions.UpdateResult(result);
      spyOn(store, 'dispatch').and.callThrough();
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Get Result', () => {
    it('should select result', () => {
        expect(AppSelectors.getResult.projector()).toBe(0);
    });
  });
  
  describe('Get Errors model', () => {
    it('should select errors model', () => {
        expect(AppSelectors.getErrors.projector()).toBe([]);
    });
  });

  describe('Get Calculation model', () => {
    it('should select calculation model', () => {
        expect(AppSelectors.getCalculation.projector()).toBe({operand: [], operation: {operation: ''}});
    });
  });
});

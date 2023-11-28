import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForContractComponent } from './request-for-contract.component';

describe('RequestForContractComponent', () => {
  let component: RequestForContractComponent;
  let fixture: ComponentFixture<RequestForContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForContractComponent]
    });
    fixture = TestBed.createComponent(RequestForContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

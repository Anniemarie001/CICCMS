import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForContractTemplatesComponent } from './request-for-contract-templates.component';

describe('RequestForContractTemplatesComponent', () => {
  let component: RequestForContractTemplatesComponent;
  let fixture: ComponentFixture<RequestForContractTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForContractTemplatesComponent]
    });
    fixture = TestBed.createComponent(RequestForContractTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

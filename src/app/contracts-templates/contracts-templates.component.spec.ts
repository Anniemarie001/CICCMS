import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsTemplatesComponent } from './contracts-templates.component';

describe('ContractsTemplatesComponent', () => {
  let component: ContractsTemplatesComponent;
  let fixture: ComponentFixture<ContractsTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractsTemplatesComponent]
    });
    fixture = TestBed.createComponent(ContractsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

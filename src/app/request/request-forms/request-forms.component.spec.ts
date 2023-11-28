import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFormsComponent } from './request-forms.component';

describe('RequestFormsComponent', () => {
  let component: RequestFormsComponent;
  let fixture: ComponentFixture<RequestFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestFormsComponent]
    });
    fixture = TestBed.createComponent(RequestFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

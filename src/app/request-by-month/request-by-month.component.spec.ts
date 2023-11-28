import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestByMonthComponent } from './request-by-month.component';

describe('RequestByMonthComponent', () => {
  let component: RequestByMonthComponent;
  let fixture: ComponentFixture<RequestByMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestByMonthComponent]
    });
    fixture = TestBed.createComponent(RequestByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

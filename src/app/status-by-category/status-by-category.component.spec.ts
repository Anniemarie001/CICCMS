import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusByCategoryComponent } from './status-by-category.component';

describe('StatusByCategoryComponent', () => {
  let component: StatusByCategoryComponent;
  let fixture: ComponentFixture<StatusByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusByCategoryComponent]
    });
    fixture = TestBed.createComponent(StatusByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

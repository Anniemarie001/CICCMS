import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NDAComponent } from './nda.component';

describe('NDAComponent', () => {
  let component: NDAComponent;
  let fixture: ComponentFixture<NDAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NDAComponent]
    });
    fixture = TestBed.createComponent(NDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

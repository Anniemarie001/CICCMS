import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewRequestComponent } from './last-few-request.component';

describe('LastFewRequestComponent', () => {
  let component: LastFewRequestComponent;
  let fixture: ComponentFixture<LastFewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastFewRequestComponent]
    });
    fixture = TestBed.createComponent(LastFewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

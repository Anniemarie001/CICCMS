import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAndServicesComponent } from './goods-and-services.component';

describe('GoodsAndServicesComponent', () => {
  let component: GoodsAndServicesComponent;
  let fixture: ComponentFixture<GoodsAndServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsAndServicesComponent]
    });
    fixture = TestBed.createComponent(GoodsAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

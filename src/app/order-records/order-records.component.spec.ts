import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRecordsComponent } from './order-records.component';

describe('OrderRecordsComponent', () => {
  let component: OrderRecordsComponent;
  let fixture: ComponentFixture<OrderRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerComponent } from './get-customer.component';

describe('GetCustomerComponent', () => {
  let component: GetCustomerComponent;
  let fixture: ComponentFixture<GetCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCustomerComponent]
    });
    fixture = TestBed.createComponent(GetCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

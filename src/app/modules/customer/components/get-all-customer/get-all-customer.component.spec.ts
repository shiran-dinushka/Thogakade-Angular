import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCustomerComponent } from './get-all-customer.component';

describe('GetAllCustomerComponent', () => {
  let component: GetAllCustomerComponent;
  let fixture: ComponentFixture<GetAllCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllCustomerComponent]
    });
    fixture = TestBed.createComponent(GetAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

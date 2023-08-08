import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCustomerComponent } from './save-customer.component';

describe('SaveCustomerComponent', () => {
  let component: SaveCustomerComponent;
  let fixture: ComponentFixture<SaveCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveCustomerComponent]
    });
    fixture = TestBed.createComponent(SaveCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

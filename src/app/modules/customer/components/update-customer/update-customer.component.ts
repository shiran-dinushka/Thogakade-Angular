import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit{

  loading = false;

  constructor(private customerService: CustomerService, private toastr: ToastrService) {
  }

  form = new FormGroup({
    id:new FormControl(null, Validators.required),
    name:new FormControl(null, [Validators.required,Validators.
    minLength(3),Validators.maxLength(10)]),
    address:new FormControl(null, Validators.required),
    salary:new FormControl(null, Validators.required),
  })

  submitForm(){
    this.loading = true;
    this.customerService.updateCustomer(
      // @ts-ignore
      this.form.value.id.toString(),
      // @ts-ignore
      this.form.value.name.toString(),
      // @ts-ignore
      this.form.value.address.toString(),
      Number(this.form.value.salary)
    ).subscribe(result =>{
      this.loading=false;
      this.onSuccess('Updated Successfully');
    }, err =>{
      this.loading=false;
      this.onError('Try Again!');
    })
  }

  onSuccess(title:string){
    this.toastr.success(title, 'Success!');
  }

  onError(title:string){
    this.toastr.error(title, 'Error!');
  }
  ngOnInit(): void {
  }

}

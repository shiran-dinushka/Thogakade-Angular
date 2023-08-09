import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit{

  loading = false;

  constructor(
    private customerService: CustomerService,
    private http: HttpClient, private toastr: ToastrService) {
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

    this.customerService.saveCustomer(
      // @ts-ignore
      this.form.value.id.toString(),
      // @ts-ignore
      this.form.value.name.toString(),
      // @ts-ignore
      this.form.value.address.toString(),
      Number(this.form.value.salary)
    ).subscribe(result =>{
      this.loading=false;
      this.onSuccess('Saved Successfully');
    }, err =>{
      this.loading=false;
      this.onError('Try Again!');
    })
  }

  onSuccess(title:string){
    this.toastr.success(title, 'Success!');
  }

  onError(title:string){
    this.toastr.success(title, 'Error!');
  }
  ngOnInit(): void {
  }

}

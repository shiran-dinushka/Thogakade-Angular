import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit{

  loading = false;

  constructor(private http: HttpClient, private toastr: ToastrService) {
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
    this.http.put("http://127.0.0.1:3000/api/v1/customer/update",{
      // @ts-ignore
      id:this.form.value.id?.toString(),
      // @ts-ignore
      name:this.form.value.name?.toString(),
      // @ts-ignore
      address:this.form.value.address?.toString(),
      salary:this.form.value.salary
    }).subscribe(result =>{
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

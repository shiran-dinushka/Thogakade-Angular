import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit{

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
    this.http.post("http://127.0.0.1:3000/api/v1/customer/save",{
      // @ts-ignore
      id:this.form.value.id?.toString(),
      // @ts-ignore
      name:this.form.value.name?.toString(),
      // @ts-ignore
      address:this.form.value.address?.toString(),
      salary:this.form.value.salary
    }).subscribe(result =>{
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

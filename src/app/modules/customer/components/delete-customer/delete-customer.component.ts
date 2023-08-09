import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../dto/CustomerDto";
import {CustomerService} from "../../services/customer.service";


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})


export class DeleteCustomerComponent implements OnInit {

  loading = false;

  constructor(private customerService: CustomerService , private toastr: ToastrService) {
  }

  ngOnInit(): void {

    }

  form = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    address: new FormControl(null, Validators.required),
    salary: new FormControl(null, Validators.required),
  })


  filterUser() {
    this.loading = true;

    this.customerService.getCustomer(
      // @ts-ignore
        this.form.value.id?.toString()
      ).subscribe(result => {
      if(result!=null){

        this.form.patchValue({
          // @ts-ignore
          name: result.name,
          // @ts-ignore
          address: result.address,
          // @ts-ignore
          salary: result.salary
        })
      }else{
        this.onError('Empty Results');
        this.loading = false;
        this.form.reset();
      }
      this.loading = false;
      console.log(result)


    }, err => {
      this.loading = false;
      this.onError('Try Again');

    })
  }

  onSuccess(title:string){
    this.toastr.success(title, 'Success!');
  }

  onError(title:string){
    this.toastr.error(title, 'Error!');
  }

  removeCustomer(){
    if(confirm("Are you sure?"))
      {
       this.customerService.deleteCustomer(
        // @ts-ignore
        this.form.value.id?.toString()
      ).subscribe(result => {
                this.loading = false;
                console.log(result);
                this.form.reset();
                this.onSuccess('deleted customer');
              }, err => {
                this.loading = false;
                this.onError('Try Again');
              })
      }
  }


}

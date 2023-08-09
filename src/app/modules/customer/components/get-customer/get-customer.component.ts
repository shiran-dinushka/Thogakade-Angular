import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Customer} from "../../dto/CustomerDto";
import {CustomerService} from "../../services/customer.service";


@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent implements OnInit {
  loading = false;

  constructor(private customerService: CustomerService, private toastr: ToastrService) {
  }

dataSet: Customer[] = [];
  searchCustomer(text: string) {
    this.loading = true;
    this.customerService.searchCustomer(
      text
    ).subscribe(result=>{
          this.loading = false;
          // @ts-ignore
          this.dataSet= result;
    }, err => {
          this.loading = false;
          this.onError('Something went wrong');
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

import {Component, OnInit} from '@angular/core';
import {Customer} from "../../dto/CustomerDto";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.scss']
})
export class GetAllCustomerComponent implements OnInit {
  loading = false;
  constructor(private customerService : CustomerService, private toastr: ToastrService) {
  }

  dataSet: Customer[] = [];
  getAllCustomer() {
    this.loading = true;
    this.customerService.getAllCustomer().subscribe(result=>{
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
    this.getAllCustomer();
  }
}

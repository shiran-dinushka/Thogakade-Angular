import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../dto/CustomerDto";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  public saveCustomer(id : string,name : string,address: string,salary : number):
  Observable<any> {
    return this.http.post("http://127.0.0.1:3000/api/v1/customer/save",{
      id,
      name,
      address,
      salary
    });
  }
  public updateCustomer(id : string,name : string,address: string,salary : number):
  Observable<any> {
    return this.http.put("http://127.0.0.1:3000/api/v1/customer/update",{
      id,
      name,
      address,
      salary
    });
  }

  public getCustomer(id : string):
    Observable<any> {
      return this.http.get<Customer>('http://127.0.0.1:3000/api/v1/customer/get', {
        headers: { id}

    })
  }

  public deleteCustomer(id : string):
    Observable<any> {
    return this.http.delete('http://127.0.0.1:3000/api/v1/customer/delete', {
      headers: { id}

    })
  }
}

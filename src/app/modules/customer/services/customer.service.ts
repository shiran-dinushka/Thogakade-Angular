import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../dto/CustomerDto";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // @ts-ignore
  target_url: environment.baseUrl;

  constructor(private http : HttpClient) { }

  public saveCustomer(id : string,name : string,address: string,salary : number):
  Observable<any> {
    return this.http.post(this.target_url+"customer/save",{
      id,
      name,
      address,
      salary
    });
  }
  public updateCustomer(id : string,name : string,address: string,salary : number):
  Observable<any> {
    return this.http.put(this.target_url+"customer/update",{
      id,
      name,
      address,
      salary
    });
  }

  public getCustomer(id : string):
    Observable<any> {
      return this.http.get<Customer>(this.target_url+'customer/get', {
        headers: { id}

    })
  }

  public deleteCustomer(id : string):
    Observable<any> {
    return this.http.delete(this.target_url+'customer/delete', {
      headers: { id}

    })
  }

  public searchCustomer(text : string):
    Observable<any> {
    return this.http.get<Customer>(this.target_url+'customer/search', {
      headers:{text}
      })
  }

  public getAllCustomer():
    Observable<any> {
    return this.http.get<Customer>(this.target_url+'customer/getAll')
  }
}

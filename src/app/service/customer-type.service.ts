import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  // customerTypeList: CustomerType[] = [
  //   {
  //     id: 1,
  //     name: 'Diamond'
  //   },
  //   {
  //     id: 2,
  //     name: 'Platinum'
  //   },
  //   {
  //     id: 3,
  //     name: 'Gold'
  //   },
  //   {
  //     id: 4,
  //     name: 'Silver'
  //   },
  //   {
  //     id: 5,
  //     name: 'Member'
  //   },
  // ];
  constructor(private http: HttpClient) { }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>('http://localhost:3000/customerType');
  }
  findById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(`http://localhost:3000/customerType/${id}`);
  }


}

import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customerList: Customer[] = [
  //   {
  //     id: 1,
  //     customerType: {id: 4, name: 'Silver'},
  //     name: 'Nguyễn Văn A',
  //     dayOfBirth: '11-11-2020',
  //     gender: 'Male',
  //     idCard: '123123123',
  //     phone: '0908765432',
  //     email: 'a@gmail',
  //     address: 'Quảng Nam'
  //   },
  //   {
  //     id: 2,
  //     customerType: {id: 4, name: 'Silver'},
  //     name: 'Nguyễn Văn B',
  //     dayOfBirth: '11-11-2020',
  //     gender: 'Male',
  //     idCard: '123456789',
  //     phone: '0909999999',
  //     email: 'b@gmail',
  //     address: 'Đà Nẵng'
  //   },
  //   {
  //     id: 3,
  //     customerType: {id: 4, name: 'Silver'},
  //     name: 'Nguyễn Văn C',
  //     dayOfBirth: '11-11-2020',
  //     gender: 'Female',
  //     idCard: '123456789',
  //     phone: '0909999000',
  //     email: 'c@gmail',
  //     address: 'Huế'
  //   },
  //   {
  //     id: 4,
  //     customerType: {id: 4, name: 'Silver'},
  //     name: 'Nguyễn Văn D',
  //     dayOfBirth: '11-11-2020',
  //     gender: 'Female',
  //     idCard: '123456789',
  //     phone: '0909999111',
  //     email: 'd@gmail',
  //     address: 'Sài Gòn'
  //   },
  //   {
  //     id: 5,
  //     customerType: {id: 4, name: 'Silver'},
  //     name: 'Nguyễn Văn E',
  //     dayOfBirth: '11-11-2020',
  //     gender: 'Female',
  //     idCard: '123226789',
  //     phone: '0909299111',
  //     email: 'd@gmail',
  //     address: 'Hà Nội'
  //   }
  // ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customer', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3000/customer/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:3000/customer/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`http://localhost:3000/customer/${id}`);
  }
}

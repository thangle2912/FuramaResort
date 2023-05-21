import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  // contracts: Contract[] = [
  //   {
  //   id: 1,
  //   facility: {name: 'Villa'},
  //   customer: {name: 'Nguyễn Văn A'},
  //   starDay: '11/11/2020',
  //   endDay: '22/11/2020',
  //   deposit: 100,
  //   total: 2000
  //   },
  //   {
  //     id: 2,
  //     facility: {name: 'House'},
  //     customer: {name: 'Nguyễn Văn B'},
  //     starDay: '15/10/2020',
  //     endDay: '20/12/2020',
  //     deposit: 120,
  //     total: 2200
  //   },
  //   {
  //     id: 3,
  //     facility: {name: 'Villa'},
  //     customer: {name: 'Nguyễn Văn C'},
  //     starDay: '11/11/2020',
  //     endDay: '22/12/2020',
  //     deposit: 400,
  //     total: 3000
  //   },
  //   {
  //     id: 4,
  //     facility: {name: 'Room'},
  //     customer: {name: 'Nguyễn Văn D'},
  //     starDay: '30/11/2020',
  //     endDay: '12/12/2020',
  //     deposit: 50,
  //     total: 300
  //   },
  //   {
  //     id: 5,
  //     facility: {name: 'House'},
  //     customer: {name: 'Nguyễn Văn E'},
  //     starDay: '22/10/2022',
  //     endDay: '22/11/2022',
  //     deposit: 200,
  //     total: 1000
  //   }
  // ];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>('http://localhost:3000/contract');
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>('http://localhost:3000/contract', contract);
  }
}

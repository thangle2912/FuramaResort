import {Injectable} from '@angular/core';
import {RentType} from '../model/rent-type';
import {Observable} from 'rxjs';
import {FacilityType} from '../model/facility-type';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  // rentTypes: RentType[] = [
  //   {
  //     id: 1,
  //     name: 'Year'
  //   },
  //   {
  //     id: 2,
  //     name: 'Month'
  //   },
  //   {
  //     id: 3,
  //     name: 'Day'
  //   },
  //   {
  //     id: 4,
  //     name: 'Hour'
  //   },
  // ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RentType[]> {
    return this.http.get<FacilityType[]>('http://localhost:3000/rentType');
  }

  findById(id: number): Observable<RentType> {
    return this.http.get<FacilityType>(`http://localhost:3000/rentType/${id}`);
  }
}

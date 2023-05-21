import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facility-type';
import {element} from 'protractor';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  // facilityTypes: FacilityType[] = [
  //   {
  //     id: 1,
  //     name: 'Villa'
  //   },
  //   {
  //     id: 2,
  //     name: 'House'
  //   },
  //   {
  //     id: 3,
  //     name: 'Room'
  //   }
  // ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>('http://localhost:3000/facilityType');
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<FacilityType>(`http://localhost:3000/facilityType/${id}`);
  }
}

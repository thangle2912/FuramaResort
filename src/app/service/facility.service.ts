import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityTypeService} from './facility-type.service';
import {FacilityType} from '../model/facility-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  // facilityList: Facility[] = [
  //   {
  //     id: 1,
  //     name: 'BEACH FRONT VILLAS',
  //     area: '150',
  //     cost: '1000',
  //     maxPeople: '5',
  //     rentType: {id: 3, name: 'Day'},
  //     facilityType: {id: 1, name: 'Villa'},
  //     standardRoom: 'Vip',
  //     other: 'No',
  //     pool: '50',
  //     floors: '3',
  //     free: '',
  //     img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'PRESIDENTIAL SUITE',
  //     area: '100',
  //     cost: '300',
  //     maxPeople: '3',
  //     rentType: {id: 3, name: 'Day'},
  //     facilityType: {id: 2, name: 'House'},
  //     standardRoom: 'Vip',
  //     other: 'No',
  //     pool: '',
  //     floors: '3',
  //     free: '',
  //     img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'OCEAN SUITE',
  //     area: '50',
  //     cost: '100',
  //     maxPeople: '3',
  //     rentType: {id: 3, name: 'Day'},
  //     facilityType: {id: 3, name: 'Room'},
  //     standardRoom: '',
  //     other: '',
  //     pool: '',
  //     floors: '',
  //     free: 'Buffer',
  //     img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  //   },
  //   {
  //     id: 4,
  //     name: 'OCEAN SUITE',
  //     area: '50',
  //     cost: '100',
  //     maxPeople: '3',
  //     rentType: {id: 3, name: 'Day'},
  //     facilityType: {id: 3, name: 'Room'},
  //     standardRoom: '',
  //     other: '',
  //     pool: '',
  //     floors: '',
  //     free: 'Buffer',
  //     img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  //   },
  //   {
  //     id: 5,
  //     name: 'PRESIDENTIAL SUITE',
  //     area: '100',
  //     cost: '300',
  //     maxPeople: '3',
  //     rentType: {id: 3, name: 'Day'},
  //     facilityType: {id: 2, name: 'House'},
  //     standardRoom: 'Vip',
  //     other: 'No',
  //     pool: '',
  //     floors: '3',
  //     free: '',
  //     img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
  //   },
  //   {
  //     id: 6,
  //     name: 'BEACH FRONT VILLAS',
  //     area: '150',
  //     cost: '1000',
  //     maxPeople: '5',
  //     rentType: {id: 3, name: 'Day'},
  //     facilityType: {id: 1, name: 'Villa'},
  //     standardRoom: 'Vip',
  //     other: 'No',
  //     pool: '50',
  //     floors: '3',
  //     free: '',
  //     img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
  //   },
  // ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>('http://localhost:3000/facility');
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>('http://localhost:3000/facility', facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`http://localhost:3000/facility/${id}`);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`http://localhost:3000/facility/${id}`, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`http://localhost:3000/facility/${id}`);
  }
}

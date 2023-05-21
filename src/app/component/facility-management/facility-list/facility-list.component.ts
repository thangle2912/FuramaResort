import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility';
import {FacilityService} from '../../../service/facility.service';
import {FacilityType} from '../../../model/facility-type';
import {RentType} from '../../../model/rent-type';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {RentTypeService} from '../../../service/rent-type.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility [] = [];
  facilityTypeList: FacilityType [] = [];
  rentTypeList: RentType [] = [];
  idDelete: number;
  id: number;
  name: string;
  area: string;
  cost: string;
  maxPeople: string;
  rentType: string;
  facilityType: string;
  standardRoom: string;
  other: string;
  pool: string;
  floors: string;
  free: string;
  p = 0;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilityList => {
      this.facilityList = facilityList;
    });
    this.facilityTypeService.getAll().subscribe(facilityTypeList => {
      this.facilityTypeList = facilityTypeList;
    });
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  showDelete(facility: Facility) {
    this.idDelete = facility.id;
    this.name = facility.name;
  }

  showDetail(facility: Facility) {
    this.id = facility.id;
    this.name = facility.name;
    this.area = facility.area;
    this.cost = facility.cost;
    this.maxPeople = facility.maxPeople;
    this.rentType = facility.rentType.name;
    this.facilityType = facility.facilityType.name;
    this.standardRoom = facility.standardRoom;
    this.other = facility.other;
    this.pool = facility.pool;
    this.floors = facility.floors;
    this.free = facility.free;
  }

  delete(idDelete: number) {
    console.log(idDelete);
    this.facilityService.deleteFacility(idDelete).subscribe(() => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}

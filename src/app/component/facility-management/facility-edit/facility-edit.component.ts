import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../../service/facility.service';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {RentTypeService} from '../../../service/rent-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../../model/facility-type';
import {RentType} from '../../../model/rent-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;
  temp: number;
  facilityTypeList: FacilityType [] = [];
  rentTypeList: RentType [] = [];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.facilityService.findById(this.id).subscribe(facility => {
        this.facilityForm = new FormGroup({
          id: new FormControl(facility.id),
          name: new FormControl(facility.name, [Validators.required]),
          area: new FormControl(facility.area, [Validators.required]),
          cost: new FormControl(facility.cost, [Validators.required]),
          maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
          rentType: new FormControl(facility.rentType.id, [Validators.required]),
          facilityType: new FormControl(facility.facilityType.id, [Validators.required]),
          standardRoom: new FormControl(facility.standardRoom),
          other: new FormControl(facility.other),
          pool: new FormControl(facility.pool),
          floors: new FormControl(facility.floors),
          free: new FormControl(facility.free),
          img: new FormControl(facility.img),
        });
      });
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityTypeService.getAll().subscribe(facilityTypeList => {
      this.facilityTypeList = facilityTypeList;
    });
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityTypeService.findById(facility.facilityType).subscribe( facilityType => {
      facility.facilityType = {id: facilityType.id, name: facilityType.name};
      this.rentTypeService.findById(facility.rentType).subscribe( rentType => {
        facility.rentType = {id: rentType.id, name: rentType.name};
        this.facilityService.updateFacility(id, facility).subscribe(() => {
          console.log(facility);
          this.toastrService.success('Edit done');
          this.router.navigate(['/facility/list']);
        });
      });
    });
  }

  changeFacility(even: number) {
    this.temp = even;
    console.log(this.temp);
  }
}

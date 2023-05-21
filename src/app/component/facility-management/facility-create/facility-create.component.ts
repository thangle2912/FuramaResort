import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../../service/facility.service';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {RentTypeService} from '../../../service/rent-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../../model/rent-type';
import {FacilityType} from '../../../model/facility-type';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  temp: number;
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl(''),
    other: new FormControl(''),
    pool: new FormControl('', [Validators.min(1)]),
    floors: new FormControl('', [Validators.min(1)]),
    free: new FormControl(''),
    img: new FormControl('https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg')
  });

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];

  ngOnInit(): void {
    this.getAll();
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityTypeService.findById(facility.facilityType).subscribe(facilityType => {
      facility.facilityType = {id: facilityType.id, name: facilityType.name};
      this.facilityService.saveFacility(facility).subscribe(() => {
        this.facilityForm.reset();
        this.toastrService.success('Create done');
        this.router.navigateByUrl('/facility/list');
      }, e => console.log(e));
    });
  }

  getAll() {
    this.facilityTypeService.getAll().subscribe(facilityTypeList => {
      this.facilityTypeList = facilityTypeList;
    });
    this.rentTypeService.getAll().subscribe(rentTypeList => {
      this.rentTypeList = rentTypeList;
    });
  }

  changeFacility(even: number) {
    this.temp = even;
    console.log(this.temp);
  }
}

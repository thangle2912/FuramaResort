import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../service/contract.service';
import {CustomerService} from '../../../service/customer.service';
import {FacilityService} from '../../../service/facility.service';
import {Customer} from '../../../model/customer';
import {Facility} from '../../../model/facility';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    starDay: new FormControl('', [Validators.required]),
    endDay: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.min(1)]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  customerList: Customer[];
  facilityList: Facility[];

  ngOnInit(): void {
    this.getAll();
  }

  submit() {
    const contract = this.contractForm.value;
    this.customerService.findById(contract.customer).subscribe( customer => {
      contract.customer = {id: customer.id, name: customer.name};
      this.facilityService.findById(contract.facility).subscribe( facility => {
        contract.facility = {id: facility.id, name: facility.name};
        this.contractService.saveContract(contract).subscribe( () => {
          this.contractForm.reset();
          this.toastrService.success('create done');
          this.router.navigate(['/contract/list']);
        });
      });
    });
  }

  getAll() {
    this.customerService.getAll().subscribe(customer => {
      this.customerList = customer;
    });
    this.facilityService.getAll().subscribe(facility => {
      this.facilityList = facility;
    });
  }
}

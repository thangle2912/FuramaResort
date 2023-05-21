import {Component, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract';
import {ContractService} from '../../../service/contract.service';
import {CustomerService} from '../../../service/customer.service';
import {FacilityService} from '../../../service/facility.service';
import {Customer} from '../../../model/customer';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  p = 0;

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(contract => {
      this.contractList = contract;
    });
    this.customerService.getAll().subscribe(customer => {
      this.customerList = customer;
    });
    this.facilityService.getAll().subscribe(facility => {
      this.facilityList = facility;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {CustomerType} from '../../../model/customer-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(customer => {
        this.customerForm = new FormGroup({
          id: new FormControl(customer.id),
          customerType: new FormControl(customer.customerType.id, [Validators.required]),
          name: new FormControl(customer.name, [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
          dayOfBirth: new FormControl(customer.dayOfBirth, [Validators.required]),
          gender: new FormControl(customer.gender, [Validators.required]),
          idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}$')]),
          phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
          email: new FormControl(customer.email, [Validators.required, Validators.email]),
          address: new FormControl(customer.address, [Validators.required])
        });
      });
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypeList = customerType;
    });
  }

  updateCustomer() {
    const customer = this.customerForm.value;
    this.customerTypeService.findById(customer.customerType).subscribe(customerType => {
      customer.customerType = {id: customerType.id, name: customerType.name};
      this.customerService.updateCustomer(this.customerForm.value.id, customer).subscribe(() => {
        this.toastrService.success('Edit done');
        this.router.navigateByUrl('/customer/list');
      });
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {CustomerType} from '../../../model/customer-type';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypeList: CustomerType[];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    customerType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$')]),
    dayOfBirth: new FormControl('', [Validators.required, this.ageValidate]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^([+84]|0?)(9[0-4|6-9])[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ageValidate(dob: AbstractControl) {
    const now = new Date();
    const birthDay = new Date(dob.value);
    const age = now.getFullYear() - birthDay.getFullYear();
    if (age < 18) {
      return {ageError: true};
    }
    return null;
  }

  ngOnInit(): void {
    this.getAll();
  }

  submit(): void {
    const customer = this.customerForm.value;
    this.customerTypeService.findById(customer.customerType).subscribe(customerType => {
      customer.customerType = {id: customerType.id, name: customerType.name};
      this.customerService.saveCustomer(customer).subscribe(() => {
        this.toastrService.success('Create done');
        this.router.navigateByUrl('/customer/list');
        this.customerForm.reset();
      }, e => console.log(e));
    });
  }

  getAll() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypeList = customerType;
    });
  }
}

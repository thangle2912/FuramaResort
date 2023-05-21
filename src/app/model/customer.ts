import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  customerType?: CustomerType;
  name?: string;
  dayOfBirth?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
}


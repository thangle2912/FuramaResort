import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id?: number;
  starDay?: string;
  endDay?: string;
  deposit?: number;
  customer?: Customer;
  facility?: Facility;
  total?: number;
}

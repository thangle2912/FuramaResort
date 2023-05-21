import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./shared/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./component/contract-management/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./component/customer-management/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./component/facility-management/facility.module').then(module => module.FacilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

const routes: Routes = [
  {
    path: 'employee/info',
    component: EmployeeInfoComponent
  },
  {
    path: 'employee/create',
    component: EmployeeAddComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employee',
    component: EmployeeGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

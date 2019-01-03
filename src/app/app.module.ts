import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

import { EmployeeService } from './business.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeGetComponent,
    EmployeeEditComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../business.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmployeeService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      
    });
  }

  addEmployee(firstName, lastName, idNumber, contact) {
    this.es.addEmployee(firstName, lastName, idNumber,contact);
  }

  ngOnInit() {
  }

}

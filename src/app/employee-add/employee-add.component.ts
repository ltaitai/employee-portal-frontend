import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../business.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmployeeService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      idNumber: ['', Validators.required ],
      contact : ['', Validators.required ]
    });
  }

  addEmployee(firstName, lastName, idNumber, contact) {
    this.es.addEmployee(firstName, lastName, idNumber,contact);
  }

  ngOnInit() {
  }

}

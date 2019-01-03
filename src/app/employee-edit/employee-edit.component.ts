import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../business.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  angForm: FormGroup;
  employee: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private es: EmployeeService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        firstName: ['', Validators.required ],
        lastName: ['', Validators.required ],
        idNumber: ['', Validators.required ],
        contact: ['', Validators.required ],
        contactType: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.es.editEmployee(params['id']).subscribe(res => {
        this.employee = res;
      });
    });
  }

  updateEmployee(firstName, lastName, idNumber,contact) {
   this.route.params.subscribe(params => {
      this.es.updateEmployee(firstName, lastName, idNumber,contact, params['id']);
      this.router.navigate(['employee']);
   });
}
}

import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { EmployeeService } from '../business.service';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  employees: Employee[];

  constructor(private es: EmployeeService) { }

  ngOnInit() {
    this.es
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
    });
  }

  deleteEmployee(id) {
    this.es.deleteEmployee(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}

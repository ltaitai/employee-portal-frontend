import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:8181';

  constructor(private http: HttpClient) { 
  }

  addEmployee(firstName, LastName, idNumber,contact) {
    const obj = {
      firstName: firstName,
      lastName: LastName,
      idNumber: idNumber,
      contact : contact
    };
    this.http.post(`${this.uri}/createEmployee`, obj)
        .subscribe(res => console.log('Done'));
  }

  getEmployees() {
    return this
           .http
           .get(`${this.uri}/findAllEmployees`);
  }

  editEmployee(id) {
    return this
            .http
            .get(`${this.uri}/findEmployeeById/?id=${id}`);
    }

  updateEmployee(firstName, LastName, idNumber, contact, id) {

    const obj = {
      firstName: firstName,
      lastName: LastName,
      idNumber: idNumber,
      contact : contact
      };
    this
      .http
      .put(`${this.uri}/updateEmployee/?id=${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteEmployee(id) {
    return this
              .http
              .get(`${this.uri}/deleteEmployeeById/?id=${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import {apiService} from '../../Services/app.apiService';
import {Student} from '../../Models/Student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students:Student[];
  studentId:number;
  selectedStudentId:number;
  constructor(private apiService:apiService) { }

  ngOnInit() {
   this.students=this.apiService.getStudents();
  }

  displaydetail(student:Student) {
    this.studentId=student.Id;
  }

  selectStudent(id:number) {
    this.selectedStudentId=id;
  }

}

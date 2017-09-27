import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import {apiService} from '../../../Services/app.apiService';
import {Student} from '../../../Models/Student';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() studentId:number;
  student:Student;

  constructor(private apiService:apiService) {
   
   }

  ngOnInit() {
    this.student=this.apiService.getStudentById(this.studentId);
  }

  ngOnChanges(changes: SimpleChanges) {
       if(changes.)
  }

}

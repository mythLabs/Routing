import { Component, OnInit,Input, OnChanges,SimpleChanges,EventEmitter,Output } from '@angular/core';
import {apiService} from '../../../Services/app.apiService';
import {Student} from '../../../Models/Student';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() studentId:number;
   @Output() seletedStudent: EventEmitter<number> = new EventEmitter();
  student:Student;


  constructor(private apiService:apiService, private router:Router ,private activatedRoute:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.student=this.apiService.getStudentById(this.studentId);
  }

  ngOnChanges(changes: SimpleChanges) {
       if(changes.studentId.currentValue!=changes.studentId.previousValue)
        {
          this.student=this.apiService.getStudentById(changes.studentId.currentValue);
        }
  }

  selectStudent(Id:number) {
     this.seletedStudent.emit(Id);
  }

  openEdit() {
      this.router.navigate(['/home/edit',this.studentId])
  }

}

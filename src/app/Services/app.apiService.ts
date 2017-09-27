import {Injectable} from '@angular/core';
import {Student} from '../Models/Student';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class apiService {
    students:Student[]=[{Id:1,name:"Rahul",contactNumber:6784987560},
                         {Id:2,name:"Sagar",contactNumber:6490234908},
                         {Id:3,name:"Amit",contactNumber:7895324744},
                         {Id:4,name:"Saurab",contactNumber:456723399}]
  
  constructor(private _httpClient:HttpClient) {
  }

  getStudents() {
    return this.students;
  }

  getStudentById(id:number):Student {
     return this.students.find(x=>x.Id == id);
  }


  //Online api
  getData(stringUrl:string) {
     return this._httpClient.get(stringUrl);
  }

}
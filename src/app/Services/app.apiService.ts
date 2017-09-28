import {Injectable} from '@angular/core';
import {Student} from '../Models/Student';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class apiService {
    students:Student[]=[{Id:1,name:"Rahul",contactNumber:6784987560 ,
                         address:[
                           {city:"nagpur",street:"121",zip:"4567",state:"Maharashtra"}
                         ]
                        },
                        {Id:2,name:"Saurab",contactNumber:5623490866 ,
                         address:[
                           {city:"haldwani",street:"126",zip:"4777",state:"Uttarakhand"}
                         ]
                        },
                        {Id:3,name:"Nitin",contactNumber:8888490866 ,
                         address:[
                           {city:"Hyderabad",street:"126",zip:"4770",state:"Telangana"}
                         ]
                        }
                        ]
  
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

  saveStudent(student:Student) {
    console.log(student);
     this.students.push(student);
  }

  updateStudent(student:Student) {
    this.students.find(x=>x.Id == student.Id).address=student.address;
    this.students.find(x=>x.Id == student.Id).contactNumber=student.contactNumber;
    this.students.find(x=>x.Id == student.Id).name=student.name;
  }

}
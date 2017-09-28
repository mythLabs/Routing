import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import {Address,states} from '../../Models/Address';
import {Student} from '../../Models/Student';
import {ActivatedRoute, Params} from '@angular/router';
import {apiService} from '../../Services/app.apiService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  editMode:boolean;
  studentId:number;
  studentForm: FormGroup;
  currentStudent:Student;
  emptyAddress:Address[]= [{city:"",state:"",street:"",zip:""}];
  states = states;

  constructor(private activatedRoute: ActivatedRoute, private apiService:apiService,private fb: FormBuilder) {
    //this.createForm("");
   }

  ngOnInit() {
     this.activatedRoute.params.subscribe(
      (params: Params) => {
               this.studentId = params['id'];
               //console.log(this.studentId);
               if(this.studentId!= undefined) {
                 this.editMode=true;
                 this.currentStudent = this.apiService.getStudentById(this.studentId);
                  this.createForm("edit");
                  this.setAddresses(this.currentStudent.address);
               } else {
                 this.editMode=false;
                   this.createForm("new");
                   this.setAddresses(this.emptyAddress); 
               }
      }
    );
     
      
     
  }

  createForm(type:string) {
    if(type == "new")
      {
         this.studentForm = this.fb.group({
      Id:["", Validators.required],
      name:["",Validators.required],
      contactNumber:["",Validators.required],
      address: [this.fb.array([])]
    });
      } else if(type == "edit"){
         this.studentForm = this.fb.group({
      Id:this.currentStudent.Id,
      name:this.currentStudent.name,
      contactNumber:this.currentStudent.contactNumber,
      address: this.fb.array([])
    });
      }
      
    
    
  }
   
   get address(): FormArray {
   return this.studentForm.get('address') as FormArray;
}

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.studentForm.setControl('address', addressFormArray);
  }
   
   onSubmit() {
    this.currentStudent = this.prepareDataBeforeSave();
    if(!this.editMode) {
         this.apiService.saveStudent(this.currentStudent);
     } else {
          this.apiService.updateStudent(this.currentStudent);
     }
    
    this.ngOnInit();
  }

  prepareDataBeforeSave():Student {
     const formModel = this.studentForm.value;
 
    // deep copy of form model lairs
    const addressDeepCopy: Address[] = formModel.address.map(
      (address: Address) => Object.assign({}, address)
    );
 
    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveStudent:Student = {
      Id: formModel.Id,
      name: formModel.name as string,
      contactNumber:formModel.contactNumber,
      address: addressDeepCopy
    };
    return saveStudent;
  }

  addAddress() {
    this.address.push(this.fb.group({address: this.fb.array([])}));
   // this.setAddresses(this.emptyAddress);
  }
 
}

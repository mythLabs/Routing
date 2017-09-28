import {Address} from './Address';

export class Student {
    Id:number;
    name:string;
    contactNumber:number;
    address:Address[];

    
    constructor(Id,name,contactNumber,address) {
       this.Id=Id;
       this.name=contactNumber;
       this.address=address;
    }
}


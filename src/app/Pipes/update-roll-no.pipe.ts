import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateRollNo'
})
export class UpdateRollNoPipe implements PipeTransform {

  transform(Id:number): string {
    return Id!= null? Id + 'SA':"";
  }

}

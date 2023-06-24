import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,search :any): any {
    // this return for the return all the pendding tasks
    if(search == 'true')
     {
       return value.filter(val=>{
            return val.status == true;
      }) 
     }
     // this return for the return all the pendding tasks
     if(search == 'false')
     {
       return value.filter(val=>{
            return val.status == false;
      })
     }
     return value;
  }

}

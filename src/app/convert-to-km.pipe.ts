import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToKm'
})
export class ConvertToKmPipe implements PipeTransform {

  transform(value: any, type : string): any {
    switch(type)
    {
      case "KM":
        return value*1.60934;
      case "M" :
        return value*1.60934*1000;
      case "CM" :
        return value*1.60934*1000*100;
    }
    
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  
  // transform(number:any) {
  //   number = number.charAt(0) != 0 ? "0" + number : "" + number;
  
  //   let newStr = "";
  //   let i = 0;
  
  //   for (; i < Math.floor(number.length / 2) - 1; i++) {
  //     newStr = newStr + number.substr(i * 3, 3) + "-";
  //   }
  
  //   return newStr + number.substr(i * 2);
  // }
  transform(value:string) {
      let val1=value.slice(0,3);
      let val2=value.slice(3,6);
      let val3=value.slice(6);
      return "("+val1+") "+val2+"-"+val3;
  }
  
} 
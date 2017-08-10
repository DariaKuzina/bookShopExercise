import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'convert'
})
export class ConverterPipe implements PipeTransform {
  transform(value: number, args?: any): number {
    let coeff = +args;
    return value * coeff;
  }
}
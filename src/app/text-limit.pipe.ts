import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {

  transform(value: string, limite?: number): any {
    if(!value)
    return null;

    let limiteAttuale = limite ? limite: 270;
    return value.substr(0,limiteAttuale) + "....";
  }

}

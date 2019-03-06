import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combo'
})
export class ComboPipe implements PipeTransform {

  transform(value: any, mappingFunction: Function): any {
    return mappingFunction(value)
  }

}

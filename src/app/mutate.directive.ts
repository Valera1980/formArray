import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appMutate]',
  host: {'(onChange)': 'onTouched($event)'},
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MutateDirective),
    multi: true
  }]
})
export class MutateDirective implements ControlValueAccessor {
  
  public onChange: any = (_) => { 
      
   }

  writeValue(obj: any): void {
    
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  constructor() { }

}

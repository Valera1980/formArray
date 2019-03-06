import { AbstractControl, ValidatorFn } from '@angular/forms';

const regexNumber = /^\d+$/;

export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid = regexNumber.test(control.value);
      console.log("​valid", valid)
      return valid ?  null : { phone:true };
    };
  }
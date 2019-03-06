import { Component, OnInit, forwardRef, ViewChild, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';
import { numberValidator } from '../validators/number.validator';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => PhoneInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting:forwardRef(() => PhoneInputComponent),
      multi: true
    }
  ]
})
export class PhoneInputComponent implements OnInit, ControlValueAccessor {
  constructor(private _renderer : Renderer2) { }

  phone;
  phoneValidator = numberValidator;
  @ViewChild('number_input') numberInput;

  ngOnInit() {
  }

  onChange: any = () => { };

  validate(control:FormControl){
    const r = this.phoneValidator()(control);
		console.log("​PhoneInputComponent -> validate -> r", r)
    return r;
  }

  setValue(val: any) {
    this.phone = val;
  }
 
  inputEvent = (v:any) => {
    const val = v.target.value.replace(/[^0-9.]/g, "");
    // const val = v.target.value;
    this.setValue(val);
    this.onChange(val);
    this.writeValue(val);
   };

  writeValue(value: any): void {
    this.setValue(value);
    this._renderer.setProperty(this.numberInput.nativeElement, 'value', value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-react-form-one',
  templateUrl: './react-form-one.component.html',
  styleUrls: ['./react-form-one.component.css']
})
export class ReactFormOneComponent implements OnInit {

  formOne:FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm():void{
     this.formOne = this.fb.group({
      formSomeOne:"1",
      formSomeTwo:"2",
      formSomeThree:"3"
     });
  }

  onSubmit(){
      console.log('​ReactFormOneComponent -> onSubmit -> this.formOne.value', this.formOne.value);
  }

}

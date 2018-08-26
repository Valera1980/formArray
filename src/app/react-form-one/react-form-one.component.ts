import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-react-form-one',
  templateUrl: './react-form-one.component.html',
  styleUrls: ['./react-form-one.component.css']
})
export class ReactFormOneComponent implements OnInit {

  formSomeOne:FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Name control value", this.formSomeOne.value);
  }

}

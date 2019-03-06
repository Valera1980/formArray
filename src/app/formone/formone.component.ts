import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {

  formOne:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formOne = this.fb.group({
      phone:''
    })
  }

  getForm(){
    const val = this.formOne.value;
		console.log("​FormoneComponent -> getForm -> val", val)
  }

  get phone(){
    return this.formOne.get('phone');
  }

}

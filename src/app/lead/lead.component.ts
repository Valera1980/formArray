import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  @Input() group:FormGroup;

  // @Input() leadName:string;
  // @Input() leadDate: Date;
  constructor() { }

  ngOnInit() {
    
    console.log('TCL: LeadComponent -> ngOnInit -> this.group', this.group);
  }

}

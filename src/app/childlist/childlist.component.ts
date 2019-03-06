import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']

})
export class ChildlistComponent implements OnInit {

  @Input() group:FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}

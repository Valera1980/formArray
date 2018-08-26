import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Output() someEmitter:EventEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  childClicked(event){
    console.log(event);
  }
  onHover(event){
    console.log(event);
  }
  onLeave(event){
    console.log(event);
  }

}

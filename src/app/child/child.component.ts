import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
  @Output() eventButton = new EventEmitter<any>();
  @Output() eventMouseOver = new EventEmitter<any>();
  @Output() eventMouseLeave = new EventEmitter<any>();
 

  constructor() { }

  ngOnInit() {
  }
  clickEvent(){
    this.eventButton.emit({aaa:9999,lll:'-0-0-0-0-'});
  }
  mouseOver(){
     this.eventMouseOver.emit('HOVER');
  }
   mouseLeave(){
    this.eventMouseLeave.emit('leave');
  }

}

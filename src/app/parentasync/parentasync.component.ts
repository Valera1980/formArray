import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentasync',
  templateUrl: './parentasync.component.html',
  styleUrls: ['./parentasync.component.css']
})
export class ParentasyncComponent implements OnInit {

  items;
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
       this.items = [
       {id:1,name:'111'},
       {id:2,name:'222'}
     ]
    }, 2000);
    
  }

}

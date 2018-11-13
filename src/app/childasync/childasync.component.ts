import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childasync',
  templateUrl: './childasync.component.html',
  styleUrls: ['./childasync.component.css']
})
export class ChildasyncComponent implements OnInit {

  private _items;
  @Input() items;
  //set items(val){
    //  val.push({
    //    id:7,name:'7777'
    //  })
  //} 
  //get items(){
 //   return this._items;
 // }
  constructor() { }

  ngOnInit() {
  }

}

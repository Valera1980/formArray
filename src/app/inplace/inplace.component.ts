import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inplace',
  templateUrl: './inplace.component.html',
  styleUrls: ['./inplace.component.css']
})
export class InplaceComponent implements OnInit {

  aaa:string;
  bbb:string;

  constructor() { }

  ngOnInit() {
  }

  link(iii){
     this.aaa = this.bbb;
     iii.active = false;
  }

  close(iii){
    iii.active = false;
	//console.log("​InplaceComponent -> close -> iii", iii)

  }

}

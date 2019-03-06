import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  obj = {value:0};
  // value = 0;
  constructor() { }

  ngOnInit() {
    // const obj = {value:0};
    // this.value = obj.value;
   this.setProgress(this.obj);
  }

  setProgress(obj){
    setTimeout(() => {
      obj.value = 100;
    }, 2000);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-droppipe',
  templateUrl: './droppipe.component.html',
  styleUrls: ['./droppipe.component.css']
})
export class DroppipeComponent implements OnInit {

  cities = [{value:1,label:'1111'},{value:2,label:'222'}];
  constructor() { }

  ngOnInit() {
  
  }

  trans_m(options){
    return options.map(city => {
      return {
        label: city.label + "+++",
        value: city.value
      }
    })
  }

}

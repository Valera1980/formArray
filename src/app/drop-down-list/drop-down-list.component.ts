import { Component, OnInit } from '@angular/core';
import { HttpCitiesService } from '../http-cities.service';
import { CityModel } from './citymodel';
import { map, tap, mergeMap, flatMap, filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { COLORS } from './colors';
// import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})


export class DropDownListComponent implements OnInit {

  cities;
  dropModel:string;
  someText:string = 'Some text';
  selectedValue:number;
  higlightClasses = {};
  
  defaultCities = [
    { aaa: 'Kiev', value: {id:777,name:"Kiev",code:'KKK'} },
    { aaa: 'Lviv', value: {id:888,name:"Lviv",code:'Lvv'} }
  ];
  constructor(
    private httpCities:HttpCitiesService
  ) { }

  ngOnInit() {
   
    const observer$  = this.httpCities.getCities();
    observer$.subscribe(data => {
       this.cities = [...this.defaultCities, ...data];
    })
  
  }
  setColor(id){
     const colors = {1:'textRed'};
     
  }

  changeCity(event,value){
      //  console.log(this.dropModel);
      // console.log(event);
      console.log(value);
      const { value:data } = value;
      const { id } = data;
      console.log(COLORS[id]);
      this.higlightClasses = {};
      this.higlightClasses[COLORS[id]] = true;
      // console.log(id);
      // this.selectedValue = id;
      // console.log(this.higlightClasses);
      // this.higlightClasses.textRed = true;

  }

  testRxjs(){
    const observer$ = this.httpCities.getCities()
      .pipe(
        tap(item => console.log(item)),
        map(data =>
          data.map(item => item.aaa).
               filter(item => item === 'Rome').
               reduce((acc,item)=> Object.assign({},{aaa:item}),{})
        ),
        tap(item => console.log(item))
        // filter(data => data.filter(item => item === 'Rome'))
        
      )
      .subscribe(data => {
        console.log(data);
      })
  }

}




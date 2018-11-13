import { Component, OnInit } from '@angular/core';
import { Man } from '../man';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.css']
})
export class DecorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const aaa = new Man(777,'gavrilow777@gmail.com');
    Object.isFrozen(aaa);
    console.log('TCL: DecorComponent -> ngOnInit -> Object.isFrozen(aaa);', Object.isFrozen(aaa))
    // aaa.id = 999;
    // aaa.email = '8987';
    console.log('TCL: DecorComponent -> ngOnInit -> aaa', aaa);


    
  }

}

// 

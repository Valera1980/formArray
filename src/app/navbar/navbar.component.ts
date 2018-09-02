import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  isAuthUser:boolean = true;
  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
    this.authService.isUserLogged.subscribe(isAuth => {
        console.log('TCL: NavbarComponent -> ngOnInit -> data', isAuth);
        this.isAuthUser = isAuth;
    })
      
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

}

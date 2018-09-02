import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form:FormGroup;
  authError:boolean = false;
  errorMessage:string = '';
  
  constructor(
    private authService: AuthserviceService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
     this.form = this.fb.group({
       name:'',
       password:''
     })
  }

  submit(){
    console.log('TCL: AuthComponent -> submit -> this.form.value', this.form.value);
    const {name,password} = this.form.value;
    this.authService.login(name,password).subscribe(data => {
      const {success,because} = data;
           console.log(']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]');
           this.router.navigate([''])
        
    },error => {
       const {success,because} = error;
       this.authError = true;
       this.errorMessage = because;
    });
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-router-params',
  templateUrl: './router-params.component.html',
  styleUrls: ['./router-params.component.css']
})
export class RouterParamsComponent implements OnInit {

  code;
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    console.log('TCL: RouterParamsComponent -> ngOnInit -> this.code', this.code);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('TCL: RouterParamsComponent -> ngOnInit -> this.id', this.id);
  }

}

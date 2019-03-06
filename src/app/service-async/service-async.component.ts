import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ServiceAsyncService } from '../service-async.service';

@Component({
  selector: 'app-service-async',
  templateUrl: './service-async.component.html',
  styleUrls: ['./service-async.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceAsyncComponent implements OnInit {

  constructor(
    private sss: ServiceAsyncService
  ) { }

  ngOnInit() {
  }
  get aaa():{aaa:number,bbb:number}{
    return this.sss.some;
  }

}

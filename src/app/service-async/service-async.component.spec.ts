import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAsyncComponent } from './service-async.component';

describe('ServiceAsyncComponent', () => {
  let component: ServiceAsyncComponent;
  let fixture: ComponentFixture<ServiceAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

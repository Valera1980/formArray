import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntreceptorComponent } from './intreceptor.component';

describe('IntreceptorComponent', () => {
  let component: IntreceptorComponent;
  let fixture: ComponentFixture<IntreceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntreceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntreceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

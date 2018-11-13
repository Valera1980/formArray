import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildasyncComponent } from './childasync.component';

describe('ChildasyncComponent', () => {
  let component: ChildasyncComponent;
  let fixture: ComponentFixture<ChildasyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildasyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

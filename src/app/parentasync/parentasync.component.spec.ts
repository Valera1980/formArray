import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentasyncComponent } from './parentasync.component';

describe('ParentasyncComponent', () => {
  let component: ParentasyncComponent;
  let fixture: ComponentFixture<ParentasyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentasyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

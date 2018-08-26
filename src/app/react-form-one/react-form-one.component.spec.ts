import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormOneComponent } from './react-form-one.component';

describe('ReactFormOneComponent', () => {
  let component: ReactFormOneComponent;
  let fixture: ComponentFixture<ReactFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppipeComponent } from './droppipe.component';

describe('DroppipeComponent', () => {
  let component: DroppipeComponent;
  let fixture: ComponentFixture<DroppipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

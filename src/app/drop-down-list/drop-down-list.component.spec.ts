import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListComponent } from './drop-down-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';



describe('DropDownListComponent', () => {
  let component: DropDownListComponent;
  let fixture: ComponentFixture<DropDownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DropDownListComponent 
      ],
      imports:[ DropdownModule,FormsModule,ButtonModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

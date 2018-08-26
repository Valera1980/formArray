import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { ParentComponent } from './parent/parent.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactFormOneComponent } from './react-form-one/react-form-one.component';



// import { DropdownModule } from 'primeng/dropdown';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildComponent,
        AppComponent,
        DropDownListComponent,
        ParentComponent,
        ReactFormOneComponent
      ],
      imports:[
        DropdownModule,
        ButtonModule,
        FormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));
  it('should create the main app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('PrimeNG');
  }));
});

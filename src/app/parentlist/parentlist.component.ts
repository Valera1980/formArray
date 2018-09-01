import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, ViewContainerRef } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, FormArray } from '@angular/forms';
import { ChildlistComponent } from '../childlist/childlist.component';


@Component({
  selector: 'app-parentlist',
  templateUrl: './parentlist.component.html',
  styleUrls: ['./parentlist.component.css']
})
export class ParentlistComponent implements OnInit {

  thisform:FormGroup;
  // users = [];
  @ViewChild('dynamic',{read: ViewContainerRef}) dynamicDiv;

  constructor(
    private fb: FormBuilder,
    private factoryComponent: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.thisform = this.fb.group({
      email:'gavrilow777@gmail.com',
      users: this.fb.array([])
    })
  }
  add(){
    // const factory: ComponentFactory<any> = this.factoryComponent.resolveComponentFactory(ChildlistComponent);
    // const component:ComponentRef<ChildlistComponent> = this.dynamicDiv.createComponent(factory);
    this.users.push(this.fb.group({
       name:'aaa',
       age:33
    }));
    
    
  }

  get users():FormArray{
    return this.thisform.get('users') as FormArray;
  }
  showFormData(){
     
     console.log('​ParentlistComponent -> showFormData -> this.thisform.value', this.thisform.value);
  }


 
}

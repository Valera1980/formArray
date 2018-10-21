import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators} from '@angular/forms';
import { ILead } from '../lead';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  reactForm:FormGroup;
  taskId:number = 0;

  // leads:ILead[];
  types = [
    {label: 'Paypal', value: 'PayPal'},
    {label: 'Visa', value: 'Visa'},
    {label: 'MasterCard', value: 'MasterCard'}
  ];
  constructor(private fb:FormBuilder) { }

  addLead(){
    this.leads.push(this.fb.group({
        leadName:new Date().toLocaleString(),
        leadDate:new Date(),
        tasks:this.fb.array([])
    }))
  }

  addTask(lead){
    console.log('TCL: ReactFormComponent -> addTask -> lead', lead);
    lead.get('tasks').push(this.fb.group({
      taskId: [this.taskId++,Validators.required],
      taskName: 'new task with id' + this.taskId
    }))

    // control.push(this.fb.group({
    //   taskId: this.taskId++,
    //   taskName: ' new task with id' + this.taskId
    // }))
  }
  
  ngOnInit() {
    
    this.reactForm = this.fb.group({
      btns:'Visa',
      name:'some',
      // leads:this.fb.array([this.createTasksArray()])
      leads:this.fb.array([])
    });

  }

  // createTasksArray(){
  //   return this.fb.group({
  //     id:'111111111111111',
  //     name:'1212212121212121',
  //     tasks:this.fb.array([])
  //   })
  // }
  get leads(){
    return this.reactForm.get('leads') as FormArray
  }

  // getTasks(form){
  //   return form.get('tasks') as FormArray;
  // }

  getVal(){
    console.log(this.reactForm.value.leads);
  }
  onSubmit(){}
  

}

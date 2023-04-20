import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isOpen:boolean =false;
  tasks:any[] =[]; 
  newTask: string ="Undefine Task !";
  constructor() {}

  addNewTask(){
    
    var task = {
      id:'NotDefine',
      isChecked:false,
      content: this.newTask
    } 
    this.newTask ="";
    this.tasks.push(task);
  }
}

import { Component } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  myTask:string = '';
  addTask: boolean;
  tasks = [];
  myArrays : {text: string, hour: string, checked: boolean}[];
  options : any;
  date = new Date();
  
  constructor() {
    this.date = new Date();
    this.options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = this.date.toLocaleDateString('fr-FR', this.options);
    this.myArrays = [
      {"text": "Unit test", "hour": this.currentDate, checked: false},
      {"text": "Acheter du lait", "hour": this.currentDate, checked: false}
    ];
  }
  
  addTaskToMyArray() {
    this.myArrays.push(new DataService(this.myTask, this.date.toLocaleDateString('fr-FR', this.options), false));
  }

  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }

  print() {
    console.log("Sorry mais c'est des données locale gros");
  }

  changeCheckState(ev: any) {
    console.log('checked: ' + ev.checked);
  }

  deleteTask(task: any) {
    //this.afDB.list('Tasks/').remove(task.key);
  }
}

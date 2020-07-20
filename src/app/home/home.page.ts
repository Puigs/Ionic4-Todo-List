import { Component } from '@angular/core';
import { DataService } from "../data.service"
import { LocalService } from "../local.service"
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

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
  myArrays : {title: string, date: string, isChecked: boolean}[];
  options : any;
  date = new Date();
  
  constructor(private localStorage: LocalService) {
    this.date = new Date();
    this.options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = this.date.toLocaleDateString('fr-FR', this.options);
    this.refresh();
  }
  
  addTaskToMyArray() {
    this.localStorage.pushData(this.myTask, this.date.toLocaleDateString('fr-FR', this.options), false);
    this.refresh();
  }

  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }

  refresh() {
    this.localStorage.getData();
    this.myArrays = this.localStorage.list;
  }

  changeCheckState(ev: any) {
    this.localStorage.changeStatus(ev.title);
    this.refresh();
  }

  deleteTask(task: string) {
    this.localStorage.delete(task);
    this.refresh();
  }
}

import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  STORAGE_KEY: string = 'myTodoList';
  list: any;
  newlist : any;
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  getData() {
    this.list = this.storage.get(this.STORAGE_KEY) || [];
  }

  pushData(str: string, newDate: string, check: boolean) {
    this.list = this.storage.get(this.STORAGE_KEY) || [];
    this.storage.remove(this.STORAGE_KEY);
    this.list.push({
      title: str,
      date: newDate,
      isChecked: check
  });
    this.storage.set(this.STORAGE_KEY, this.list);
  }

  delete(title: string) {
    this.newlist = [];
    this.list = this.storage.get(this.STORAGE_KEY) || [];
    for (var i = 0; i < this.list.length; i++) {
      if (title == this.list[i].title)
        continue;
      this.newlist.push(this.list[i]);
    }
    this.storage.remove(this.STORAGE_KEY);
    this.storage.set(this.STORAGE_KEY, this.newlist);
  }
  changeStatus(title: string) {
    this.list = this.storage.get(this.STORAGE_KEY) || [];
    for (var i = 0; i < this.list.length; i++) {
      if (title == this.list[i].title) {
        if (this.list[i].isChecked == true)
          this.list[i].isChecked = false;
        else
          this.list[i].isChecked = true;
      }
    }
    this.storage.remove(this.STORAGE_KEY);
    this.storage.set(this.STORAGE_KEY, this.list);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  text: string
  hour: string
  checked : boolean
  constructor(public ntext: string, public nhour: string, public ncheck: boolean) { 
    this.text = ntext;
    this.hour = nhour;
    this.checked = ncheck;
  }
}

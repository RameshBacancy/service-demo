import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public commonJsonData = "old Value"; 
  constructor() { }
  todayDate() {
    let ndate = new Date();
    return ndate;
  }
  updatedData(){
    let data = 'demo ' + this.commonJsonData;
    return data;  
  }
}

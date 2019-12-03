import { Injectable } from '@angular/core';
import * as ons from 'onsenui';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
    operator: any;
    flyer: any;
    pfco: any;
  constructor() { 
this.checkDetailsStorage();
  }


  getFromStorage(key){
return JSON.parse(localStorage.getItem(key))
  }


  addToStorage(key, obj){

localStorage.setItem(key, JSON.stringify(obj))
ons.notification.toast( `${obj.sectionName} updated sucessfully!`, {timeout: 2000});
  }

  checkDetailsStorage(){
      this.operator = localStorage['operator'] 
      ? JSON.parse(localStorage.getItem('operator')) 
      : {
        opID: '',
        name:'',
        startDate:'',
        expDate:'',
        sectionName:'Operator Section'
        
      };
      this.flyer = localStorage['flyer'] 
      ? JSON.parse(localStorage.getItem('flyer')) 
      : {
        flyID: '',
        name:'',
        startDate:'',
        expDate:'',
        sectionName:'Flyer Section'
      };
      this.pfco = localStorage['pfco'] 
      ? JSON.parse(localStorage.getItem('pfco')) 
      : {
        pfcoID: '',
        name:'',
        startDate:'',
        expDate:'',
        sectionName:'PFCO Section'
      };
  }
}


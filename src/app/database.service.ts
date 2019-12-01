import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public operatorDetails = [];
  public flyerDetails:[];
  public pfcoDetails:[];

  public operator = {
    opID: '',
    name:'',
    startDate:'',
    expDate:''
  }

  public flyer = {
    flyID: '',
    name:'',
    startDate:'',
    expDate:''
  }

  public pfco = {
    pfcoID: '',
    name:'',
    startDate:'',
    expDate:''
  }


  constructor() { }

  checkStorage(){
    if (localStorage.length > 0) {

      if (localStorage['operator']) {
      this.operatorDetails = JSON.parse(localStorage.getItem('operator'))
      }
      if (localStorage['flyer']) {
      this.flyerDetails = JSON.parse(localStorage.getItem('flyer'))
      }
      if (localStorage['pfco']) {
      this.pfcoDetails = JSON.parse(localStorage.getItem('pfco'))
      }
    } 

    console.log(this.operatorDetails)

    
  }

  checkDetailsStorage(){
    if (localStorage.length > 0) {

      if (localStorage['operator']) {
      this.operator = JSON.parse(localStorage.getItem('operator'))
      }
      if (localStorage['flyer']) {
      this.flyer = JSON.parse(localStorage.getItem('flyer'))
      }
      if (localStorage['pfco']) {
      this.pfco = JSON.parse(localStorage.getItem('pfco'))
      }
    } 

    console.log(this.operator)

    
  }
}


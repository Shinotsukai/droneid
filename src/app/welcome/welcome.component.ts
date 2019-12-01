import { Component, OnInit } from '@angular/core';
import { AddinfoComponent } from '../addinfo/addinfo.component';

@Component({
  selector: 'ons-page[welcome]',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {


  }

  pushPage(){
    (document.getElementById('mainNavi') as any).pushPage(AddinfoComponent, { animation: 'slide' });
  }

}

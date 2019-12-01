import { Component, OnInit } from '@angular/core';
import { AddinfoComponent } from '../addinfo/addinfo.component';

@Component({
  selector: 'ons-page[settingspage]',
  templateUrl: './settingspage.component.html',
  styleUrls: ['./settingspage.component.css']
})
export class SettingspageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pushPage(){
    (document.getElementById('menu') as any).toggle();
    setTimeout(function(){
      (document.getElementById('mainNavi') as any).pushPage(AddinfoComponent, { animation: 'slide' });
    }, 200);
    
    
  }
}

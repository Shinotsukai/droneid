import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'ons-page[maincontent]',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {


  constructor(public storage: DatabaseService) { }

  ngOnInit() {

    this.storage.checkStorage()

  }

  

  onSettingsClick(){
    (document.getElementById('menu') as any).toggle();
  }

}

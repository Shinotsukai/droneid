import { Component, OnInit } from '@angular/core';
import { MaincontentComponent } from '../maincontent/maincontent.component';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'ons-page[addinfo]',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {

  


  constructor(public storage: DatabaseService) {

   }

  ngOnInit() {
    this.storage.checkDetailsStorage()
  }





  pushPage(){
    (document.getElementById('mainNavi') as any).resetToPage(MaincontentComponent, { animation: 'slide' });
  }
}

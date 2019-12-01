import { Component, OnInit } from '@angular/core';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drone-id';
  

  idPage = MaincontentComponent;
  settingsPage = SettingspageComponent;
  landingPage: any;


  ngOnInit() {

    if (localStorage.length > 0) {
      this.landingPage = MaincontentComponent;
    }
    else
    {
      this.landingPage = WelcomeComponent;
    }
  }

}

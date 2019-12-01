import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabaseService } from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    MaincontentComponent,
    SettingspageComponent,
    AddinfoComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
entryComponents: [
  MaincontentComponent,
  SettingspageComponent,
  AddinfoComponent,
  WelcomeComponent
]
})
export class AppModule { }

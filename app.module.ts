import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { studentComponent } from './student.component';
import {AboutusComponent} from './aboutus.component';
import { studentDetail } from './studentdetail.component';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { myRoutes } from './app.routes';
import {DataService} from './db.service';
import {Error404Component} from "./error404.component";
import {ProfileGuard} from "./profile.guard";

@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    HomeComponent,
    AboutusComponent,
    studentDetail,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],

  providers: [DataService,ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

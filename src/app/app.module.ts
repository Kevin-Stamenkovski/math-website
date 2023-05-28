import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, sections} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import { EsponenzialiComponent } from './components/esponenziali/esponenziali.component';
import { LogaritmiComponent } from './components/logaritmi/logaritmi.component';

@NgModule({
  declarations: [
    AppComponent,
    sections,
    SidebarComponent,
    EsponenzialiComponent,
    LogaritmiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

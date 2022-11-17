import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHumanComponent } from './human/create-human.component';
import { DisplayHumanComponent } from './human/display-human.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HumanManagerComponent } from './human-manager/human-manager.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanManagerComponent,
  ],
  imports: [
    DisplayHumanComponent,
    CreateHumanComponent,
    ToolbarComponent,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

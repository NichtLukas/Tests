import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHumanComponent } from './create-human/create-human.component';
import { DisplayHumanComponent } from './display-human/display-human.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HumanManagerComponent } from './human-manager/human-manager.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CommonModule } from '@angular/common';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

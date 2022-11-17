import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  standalone: true,
  selector: 'app-toolbar',
  template: `
  <mat-toolbar class="toolbar">
    <span>{{title}}</span>
  </mat-toolbar>
  `,
  styles:[`.toolbar{background-color: dimgray;}`],
  imports:[
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class ToolbarComponent {
  public title:string = "Human Manager";
}

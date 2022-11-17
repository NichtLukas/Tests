import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Human } from './human.model';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';


@Component({
  standalone: true,
  selector: 'app-display-human',
  template:`
  <mat-list class="list">
    <div mat-subheader>Persons</div>
    <mat-divider></mat-divider>
    <mat-list-item *ngFor="let human of humans">
      <mat-divider></mat-divider>
      <div class="row-contianer">
        <div class="name-row" matListItemTitle>{{human.name}} ({{human.age}})</div>
          <button mat-icon-button (click)="onDelete(human)" id="delete:{{human.id}}">
            <mat-icon>delete</mat-icon>
          </button>
      </div>
    </mat-list-item>
  </mat-list>
`,
  styles:[
    `.list {
      margin-top: 20px;
      margin-left: 5%;
      width: 90%;
      border: 1px solid transparent;
  }
  .row-contianer{
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: 1px solid transparent;
  }
  .name-row{
      margin-top: 10px;
      width: 40%;
      font-family: monospace;
  } 
  .row-contianer:hover{
      border-color: currentColor;
      background-color: rgb(224, 224, 224);
  }
  `
  ],
  imports:[
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
  ]

})

// Grid und List view machen und mit einem Switch die darstellung ändern 
export class DisplayHumanComponent { // HumanListComponent HumanGridComponent
  displayedColumns: string[] = ['name', 'age', 'options'];
  
  @Input() public humans: Human[] = []; 
  @Output() public delete = new EventEmitter<Human>();

  public onDelete(human:Human):void{
    this.delete.emit(human);
  }
}
    
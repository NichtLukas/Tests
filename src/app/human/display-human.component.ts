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
  <mat-list aria-label="display-human-list">
    <div mat-subheader>Persons</div>
    <mat-list-item *ngFor="let human of humans">
      <span class="list-name">{{human.name}} ({{human.age}})</span>
      <button mat-icon-button (click)="onDelete(human)" id="delete:{{human.uuid}}" [attr.data-testid]='"delete:" + human.uuid'>
        <!-- data-testid="1234-{{human.uuid}} -->
        <mat-icon>delete</mat-icon>
      </button>
    </mat-list-item>
  </mat-list>
`,
  styles:[
    `
  mat-list-item {
    border-top: 1px solid black;
  }
  mat-list-item:hover {
    background-color: rgba(224, 224, 224, 0.5);
  }
  .mat-list-item:last-child{
    border-bottom: 1px solid black;
  }
  .list-name {
    margin: 0 auto 0 0;
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
    
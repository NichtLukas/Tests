import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Human } from '../human/human.model';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@Component({
  standalone: true,
  selector: 'app-display-human',
  templateUrl: './display-human.component.html',
  styleUrls: ['./display-human.component.css'],
  imports:[
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
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
    
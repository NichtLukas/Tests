import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Human } from '../human/human.model';
import { AngularMaterialModuleDisplayHuman } from './display-human.module';



@Component({
  standalone: true,
  selector: 'app-display-human',
  templateUrl: './display-human.component.html',
  styleUrls: ['./display-human.component.css'],
  imports:[
    AngularMaterialModuleDisplayHuman,
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
    
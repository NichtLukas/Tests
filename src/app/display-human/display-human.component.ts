import { Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { Human } from '../human';

@Component({
  selector: 'app-display-human',
  templateUrl: './display-human.component.html',
  styleUrls: ['./display-human.component.css'],

})

//TODO umbennen in list view z.b. 
// Grid und List view machen und mit einem Switch die darstellung ändern 
export class DisplayHumanComponent { // HumanListComponent HumanGridComponent
  displayedColumns: string[] = ['name', 'age', 'options'];
  tabelVlaue: Human[] = [];
  private readonly destroyed = new Subject<void>();
  
  @Input() public humans: Human[] = []; // humans
  @Output() public delete = new EventEmitter<Human>();

  public onDelete(human:Human):void{
    this.delete.emit(human);
  }
}
    
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { Human } from '../human';

@Component({
  selector: 'app-display-human',
  templateUrl: './display-human.component.html',
  styleUrls: ['./display-human.component.css'],

})

//TODO umbennen in list view z.b. 
// Grid und List view machen und mit einem Switch die darstellung ändern 
export class DisplayHumanComponent{ // HumanListComponent HumanGridComponent
  displayedColumns: string[] = ['name', 'age', 'options'];
  tabelVlaue: Human[] = []
  
  @Input() public humans:Observable<Human[]> = new Observable<Human[]>; // humans
  @Output() public delete = new EventEmitter<Human>();

  constructor(){
    this.humans.subscribe(humans => this.tabelVlaue = humans);
  }

  public onDelete(human:Human):void{
    this.delete.emit(human);
  }


}

                      
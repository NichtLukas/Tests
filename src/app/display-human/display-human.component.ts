import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Human } from '../human';
import { HumanService } from '../human.service';

@Component({
  selector: 'app-display-human',
  templateUrl: './display-human.component.html',
  styleUrls: ['./display-human.component.css'],

})

//TODO umbennen in list view z.b. 
// Grid und List view machen und mit einem Switch die darstellung ändern 
export class DisplayHumanComponent{
  @ViewChild(MatTable)
  table!: MatTable<Human>;
  ELEMENT_DATA:Human[] = [];
  displayedColumns: string[] = ['name', 'age', 'options'];
  

  constructor(private humanService:HumanService) { 
    this.humanService.getHumans$()
    .subscribe((data:Human[]) =>{
      this.ELEMENT_DATA = data;
      this.table.renderRows();//TODO: updating table after delete not possible without renderrows -> figure out why
    }
     );
  }

  public deleteHuman(human:Human):void{
    this.humanService.deleteByObject(human);
  }


}

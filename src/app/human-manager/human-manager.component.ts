import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Human, HumanCreate } from '../human';
import { HumanService } from '../human.service';

@Component({
  selector: 'app-human-manager',
  templateUrl: './human-manager.component.html',
  styleUrls: ['./human-manager.component.css']
})
export class HumanManagerComponent {

  public humans$!: Observable<Human[]>;
  
  constructor(private readonly humanService:HumanService) {
    this.humans$ = this.humanService.Humans$
  }

  public onAdd(human: HumanCreate): void {
    this.humanService.add(human);
  }

  public onDelete(human:Human){
    this.humanService.deleteByObject(human);
  }



}

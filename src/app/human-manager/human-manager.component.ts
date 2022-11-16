import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Human, HumanCreate } from '../human/human.model';
import { HumanService } from '../human/human.service';

@Component({
  selector: 'app-human-manager',
  templateUrl: './human-manager.component.html',
  styleUrls: ['./human-manager.component.css']
})
export class HumanManagerComponent {

  public humans$: Observable<Human[]> = this.humanService.humans$;
  
  constructor(private readonly humanService: HumanService) {}

  public onAdd(human: HumanCreate): void {
    this.humanService.add(human);
  }

  public onDelete(human:Human): void{
    this.humanService.deleteByObject(human);
  }



}

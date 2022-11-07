import { Component, OnInit } from '@angular/core';
import { HumanCreate } from '../human';
import { HumanService } from '../human.service';

@Component({
  selector: 'app-human-manager',
  templateUrl: './human-manager.component.html',
  styleUrls: ['./human-manager.component.css']
})
export class HumanManagerComponent {

  constructor(private readonly humanService:HumanService) { }

  public onHuman(human: HumanCreate): void {
    this.humanService.add(human);
  }
}

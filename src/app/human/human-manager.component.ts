import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Human, HumanCreate } from './human.model';
import { HumanService } from './human.service';

@Component({

  selector: 'app-human-manager',
  template: `

  <div class="human-wrapper">
    <mat-card>
      <mat-card-title>Create Human</mat-card-title>
      <mat-card-content>
        <app-create-human (human)="onAdd($event)">
        </app-create-human>
      </mat-card-content>
    </mat-card>

    <mat-card>
      <mat-card-title>List Humans</mat-card-title>
      <mat-card-content>
        <app-display-human [humans]="(humans$ | async) || []" (delete)="onDelete($event)">
        </app-display-human>
      </mat-card-content>
    </mat-card>
    </div>
    
  `,
  styles:[`
    .human-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    mat-card {
      box-sizing: border-box;
      width: 100%;
      background-color: #ebfdff;
    }
  `],
})
export class HumanManagerComponent implements OnInit {

  public humans$: Observable<Human[]> = this.humanService.humans$;
  
  constructor(private readonly humanService: HumanService) {}

  ngOnInit(): void {
    this.humanService.load();
  }

  public onAdd(human: HumanCreate): void {
    this.humanService.add(human);
  }

  public onDelete(human:Human): void{
    this.humanService.deleteByObject(human);
  }



}

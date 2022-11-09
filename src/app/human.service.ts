import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Human, HumanCreate } from './human';
import { v4 as uuidv4 } from 'uuid';
import { HUMAN_LIST_MOCK } from './mocks/human-mocks';



@Injectable({
  providedIn: 'root'
})
export class HumanService {

  //_ = Private 
  //$ = BehaviorSubject
  private readonly humans$: BehaviorSubject<Human[]>

  constructor() { 
    this.humans$ = new BehaviorSubject<Human[]>([]);
    //TODO: Nur für Mock zuständig
    this.humans$.next(HUMAN_LIST_MOCK)
  }

  public get Humans$():Observable<Human[]>{
    return this.humans$.asObservable();
  }

  public add(human: HumanCreate): void{
    const uuid = uuidv4();
    this.humans$.next([...this.humans$.value, {...human, uuid}]);
  }

  public deleteByObject(human: Human): void{
    let humans: Human[] = this.humans$.value;
    humans = humans.filter((humanCopy) => humanCopy.uuid !== human.uuid)
    this.humans$.next(humans);
  }

}

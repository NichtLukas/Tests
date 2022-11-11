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
  private readonly _humans$: BehaviorSubject<Human[]>

  constructor() { 
    this._humans$ = new BehaviorSubject<Human[]>(HUMAN_LIST_MOCK);
  }

  public get humans$():Observable<Human[]>{
    return this._humans$.asObservable();
  }

  public add(createHuman: HumanCreate): Human{
    const uuid: string = uuidv4();
    const human: Human = {...createHuman, uuid};
    
    this._humans$.next([...this._humans$.value, human]);
    return human;
  }

  public deleteByObject(human: Human): void{
    let humans: Human[] = this._humans$.value
      .filter((humanCopy) => humanCopy.uuid !== human.uuid);
    this._humans$.next(humans);

  }

}

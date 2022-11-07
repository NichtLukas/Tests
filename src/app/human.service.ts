import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Human, HumanCreate } from './human';
import { v4 as uuidv4 } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class HumanService {

  //_ = Private 
  //$ = BehaviorSubject
  private readonly humans$: BehaviorSubject<Human[]>

  constructor() { 
    this.humans$ = new BehaviorSubject<Human[]>([]);
  }

  public getHumans$():Observable<Human[]>{
    return this.humans$.asObservable();
  }

  public add(human: HumanCreate): void{
    const uuid = uuidv4();
    this.humans$.next([...this.humans$.value, {...human, uuid}]);
  }

  public deleteByObject(human: Human): void{
    const humans: Human[] = this.humans$.value;
    //humans.find((humanCopy) => humanCopy.uuid == human.uuid)
    humans.splice(humans.indexOf(human));
    this.humans$.next(humans);
  }

}

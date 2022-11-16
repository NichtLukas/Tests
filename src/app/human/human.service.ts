import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { Human, HumanCreate } from './human.model';



@Injectable({
  providedIn: 'root'
})
export class HumanService {

  //_ = Private 
  //$ = BehaviorSubject
  private readonly _humans$: BehaviorSubject<Human[]>


  constructor(private http: HttpClient) { 
    this._humans$ = new BehaviorSubject<Human[]>([]);
  }

  public get humans$():Observable<Human[]>{
    return this._humans$.asObservable();
  }

  public load(){
    this.http.get<Human[]>(`${environment.api}/humans`).subscribe({
      next: (humans:Human[]) => {
        this._humans$.next(humans);
      },
      error: (error:Error) =>{
        console.log(error.message);
      }
    });
  }

  // public loadHumansFromServer(destroy:Subject<void>):Observable<Human[]>{
  //   return  this.http.get<Human[]>(`${environment.api}/humans`)
  //   .pipe(takeUntil(destroy));
  // }


  // public loadHumansFromServer(){
  //   this.http.get<Human[]>(`${environment.api}/humans`)
  // }

  public add(createHuman: HumanCreate): Human{
    const uuid: string = uuidv4();
    const human: Human = {uuid,...createHuman};

    this.http.post<Human>(`${environment.api}/humans`,human).
    subscribe((response)=>{
      console.log(response);
    });
    
    return human;
  }

  public deleteByObject(human: Human): void{
    let humans: Human[] = this._humans$.value
      .filter((humanCopy) => humanCopy.uuid !== human.uuid);
    this._humans$.next(humans);

  }

}

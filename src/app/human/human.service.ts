import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

    this.http.get<Human[]>(`${environment.api}/humans`)
    .subscribe({
      next: (humans:Human[]) => {
        this._humans$.next(humans);
      },
      error: (error:Error) =>{
        console.log(error.message);
      }
    });
  }
  
  public add(createHuman: HumanCreate): void{
    this.http.post<HumanCreate>(`${environment.api}/humans`,createHuman).
    subscribe((response)=>{
      console.log(response);
    });
  }

  public deleteByObject(human: Human): void{
    this.http.delete(`${environment.api}/humans/${human.id}`)
    .subscribe(()=>{
    })
  }

    // public loadHumansFromServer(destroy:Subject<void>):Observable<Human[]>{
  //   return  this.http.get<Human[]>(`${environment.api}/humans`)
  //   .pipe(takeUntil(destroy));
  // }


  // public loadHumansFromServer(){
  //   this.http.get<Human[]>(`${environment.api}/humans`)
  // }
}

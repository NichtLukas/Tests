import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Human, HumanApi, HumanCreate } from './human.model';



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

  public load(): void {
    this.http.get<HumanApi[]>(`${environment.api}/humans`)
    .pipe(
      map((humansApi: HumanApi[]) => humansApi.map((humanApi: HumanApi) => {
      return {
        ...humanApi,
        uuid: humanApi.id
      }
    })),
    catchError((error:Error) => {
      throw error;
    })
    )
    .subscribe({
      next: (humans: Human[]) => {
        this._humans$.next(humans);
      }
    });
  }
  
  public add(createHuman: HumanCreate): void{
    this.http.post<HumanCreate>(`${environment.api}/humans`,createHuman)
    .subscribe((response)=>{
      console.log(response);
    }).unsubscribe();

  }

  public deleteByObject(human: Human): void{
    this.http.delete(`${environment.api}/humans/${human.uuid}`)
    .subscribe(()=>{
    }).unsubscribe();
  }

  public getById(id:number):Human|undefined{
    let human:Human|undefined;
    this.http.get<HumanApi[]>(`${environment.api}/humans/${id}`)
    .pipe(
      map((humansApi: HumanApi[]) => humansApi.map((humanApi: HumanApi) => {
      human = {
        uuid: humanApi.id,
        name: humanApi.name,
        age: humanApi.age
      }
    }))).subscribe().unsubscribe();
    return human;
  }

    // public loadHumansFromServer(destroy:Subject<void>):Observable<Human[]>{
  //   return  this.http.get<Human[]>(`${environment.api}/humans`)
  //   .pipe(takeUntil(destroy));
  // }


  // public loadHumansFromServer(){
  //   this.http.get<Human[]>(`${environment.api}/humans`)
  // }
}

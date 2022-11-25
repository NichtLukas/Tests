import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Human, HumanApi, HumanCreate } from './human.model';



@Injectable({
  providedIn: 'root'
})
export class HumanService  {

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
     this.http.post<HumanApi>(`${environment.api}/humans`,createHuman).subscribe({
      next: ()=>{
        this.load();  
      },
      complete: ()=>{
        console.log('add complete')
      },
      error: (error: HttpErrorResponse)=>{
        console.log(error)
      }
     })
  }

  public deleteByObject(human: Human): void{
    this.http.delete(`${environment.api}/humans/${human.uuid}`).subscribe({
      next: ()=>{
        this.load();  
      },
      complete: ()=>{
        console.log('delete complete')
      },
      error: (error: HttpErrorResponse)=>{
        console.log(error)
      }
     })
  }

  public getById(id:number): Observable<HumanApi>{
   return this.http.get<HumanApi>(`${environment.api}/humans/${id}`)

  }

}


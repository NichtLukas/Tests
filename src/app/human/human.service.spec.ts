import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Human, HumanApi, HumanCreate } from './human.model';
import { HumanService } from './human.service';

describe('HumanService', () => {
  let service: HumanService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
            HumanService
          ]
      });
      service = TestBed.inject(HumanService);
      httpMock = TestBed.inject(HttpTestingController);
  });

  it('#add should add human in humans', ()=>{
    const expectedCreate:HumanCreate = {name:'Max Mustermann',age:18}
    service.add(expectedCreate);
    const req = httpMock.expectOne(`/api/humans`);
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(expectedCreate);
  });

  it('#deleteByObject should delete from humans', () =>{
    const expectedDelete:Human = {name:'Max Mustermann',age:18, uuid:1}
    service.deleteByObject(expectedDelete);
    const req = httpMock.expectOne(`/api/humans/1`);
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('DELETE');
    expect(req.request.body).toEqual(null);
  });

  it('getByID should return Observable of HumanAPI', () =>{
    const expectedSearch:HumanApi = {name:'Max Mustermann',age:18, id:1}
    const human$:Observable<HumanApi> = service.getById(expectedSearch.id);
    expect(human$).toBeInstanceOf(Observable);
  });
});

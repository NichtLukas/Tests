import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { DEFAULT_HUMAN_CREATE, Human } from './human.model';
import { HumanService } from './human.service';


describe('HumanService', () =>{
  let service: HumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HumanService] });
    service = TestBed.inject(HumanService);
  });
  
  it('#humans$ should return an Observable of humans', () =>{
    expect(service.humans$).toBeInstanceOf(Observable)
    let humans: Human[]|undefined;
    service.humans$.subscribe((find:Human[])=>{
      humans = find;
    });
    expect(humans).toBeInstanceOf(Array);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#add should transform createHuman to Human and add uuid', () =>{

    let human:Human = service.add(DEFAULT_HUMAN_CREATE);
    const REGEX_UUID: RegExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
    expect(REGEX_UUID.test(human.uuid)).toBeTruthy();
  });

  it('#add should put human in _humans$', ()=>{
    let didFind:Human|undefined;
    const HUMAN:Human = service.add(DEFAULT_HUMAN_CREATE);
    service.humans$.subscribe((humans:Human[])=>{
        didFind = humans.find((searchHuman:Human) =>{
        return searchHuman.uuid === HUMAN.uuid  
      });
    });
    expect(didFind).toBeDefined()
  });

  it('#deleteByObject should delete an human from humans$',() =>{
    const HUMAN:Human = service.add(DEFAULT_HUMAN_CREATE);
    let didFind:Human | undefined
    service.deleteByObject(HUMAN);
    service.humans$.subscribe((humans:Human[])=>{
        didFind = humans.find((searchHuman:Human) =>{
        return searchHuman.uuid === HUMAN.uuid  
      });
    });
    expect(didFind).toBeUndefined()
  });

});



//   it('#humans$ should return an Observable of humans',() =>{
//     expect(service.humans$).toBeInstanceOf(Observable<Human[]>);
//   })





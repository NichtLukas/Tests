import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Human, DEFAULT_HUMAN_CREATE, DEFAULT_HUMAN } from './human';
import { HumanService } from './human.service';


describe('HumanService', () =>{
  let service: HumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HumanService] });
    service = TestBed.inject(HumanService);
  });
  
  it('#humans$ should return an Observable of humans', () =>{
    expect(service.humans$).toBeInstanceOf(Observable)
    service.humans$.subscribe((humans:Human[])=>{
      expect(humans).toBeInstanceOf(Array);
      //expect(humans).toMatchObject<Human>; TODO: Typsierung
    });
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
    const HUMAN:Human = service.add(DEFAULT_HUMAN_CREATE);
    service.humans$.subscribe((humans:Human[])=>{
      let didFind:Human | undefined = humans.find((searchHuman:Human) =>{
        return searchHuman.uuid === HUMAN.uuid  
      });
      expect(didFind).not.toBeUndefined();
    });
  });

  it('#deleteByObject should delete an human from humans$',() =>{
    const HUMAN:Human = service.add(DEFAULT_HUMAN_CREATE);
    service.deleteByObject(HUMAN);
    service.humans$.subscribe((humans:Human[])=>{
        let didFind:Human | undefined = humans.find((searchHuman:Human) =>{
        return searchHuman.uuid === HUMAN.uuid  
      });
      expect(didFind).toBeUndefined()
    });
  });

});



//   it('#humans$ should return an Observable of humans',() =>{
//     expect(service.humans$).toBeInstanceOf(Observable<Human[]>);
//   })





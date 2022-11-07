import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanManagerComponent } from './human-manager.component';

describe('HumanManagerComponent', () => {
  let component: HumanManagerComponent;
  let fixture: ComponentFixture<HumanManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

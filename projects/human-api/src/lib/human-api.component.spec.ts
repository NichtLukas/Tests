import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanApiComponent } from './human-api.component';

describe('HumanApiComponent', () => {
  let component: HumanApiComponent;
  let fixture: ComponentFixture<HumanApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

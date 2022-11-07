import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHumanComponent } from './create-human.component';

describe('CreateHumanComponent', () => {
  let component: CreateHumanComponent;
  let fixture: ComponentFixture<CreateHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHumanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

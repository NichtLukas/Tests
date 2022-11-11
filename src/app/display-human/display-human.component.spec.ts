import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayHumanComponent } from './display-human.component';
import { Human } from '../human';

describe('DisplayHumanComponent', () => {
  let component: DisplayHumanComponent;
  let fixture: ComponentFixture<DisplayHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  
        DisplayHumanComponent
      ],
      imports:[
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

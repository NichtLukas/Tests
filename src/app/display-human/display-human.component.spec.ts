import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayHumanComponent } from './display-human.component';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

describe('DisplayHumanComponent', () => {
  let component: DisplayHumanComponent;
  let fixture: ComponentFixture<DisplayHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  
        DisplayHumanComponent
      ],
      imports:[
        MatTableModule,
        CommonModule,
        BrowserModule,
        MatIconModule,
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

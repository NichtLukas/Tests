import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateHumanComponent } from '../human/create-human.component';
import { DisplayHumanComponent } from '../human/display-human.component';
import { HumanManagerComponent } from './human-manager.component';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

describe('HumanManagerComponent', () => {
  let component: HumanManagerComponent;
  let fixture: ComponentFixture<HumanManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanManagerComponent, ],
      imports: [
        CreateHumanComponent,
        BrowserAnimationsModule,
        MatTableModule,
        CommonModule,
        BrowserModule,
        MatIconModule,
        DisplayHumanComponent,
      ]
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

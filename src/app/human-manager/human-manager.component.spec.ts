import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateHumanComponent } from '../create-human/create-human.component';
import { DisplayHumanComponent } from '../display-human/display-human.component';
import { HumanManagerComponent } from './human-manager.component';

import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

describe('HumanManagerComponent', () => {
  let component: HumanManagerComponent;
  let fixture: ComponentFixture<HumanManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanManagerComponent,
        DisplayHumanComponent ],
      imports: [
        CreateHumanComponent,
        BrowserAnimationsModule,
        MatTableModule,
        CommonModule,
        BrowserModule,
        MatIconModule,
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

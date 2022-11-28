import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateHumanComponent } from '../human/create-human.component';
import { DisplayHumanComponent } from '../human/display-human.component';
import { HumanManagerComponent } from './human-manager.component';

import { HumanService } from './human.service';

describe('HumanManagerComponent', () => {
  let component: HumanManagerComponent;
  let fixture: ComponentFixture<HumanManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanManagerComponent, ],
      imports: [
        DisplayHumanComponent,
        CreateHumanComponent,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        // MatTableModule,
        // CommonModule,
        // BrowserModule,
        // MatIconModule,
      ],
      providers: [
        HumanService
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

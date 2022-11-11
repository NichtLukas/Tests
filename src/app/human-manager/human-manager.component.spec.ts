import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateHumanComponent } from '../create-human/create-human.component';
import { DisplayHumanComponent } from '../display-human/display-human.component';


import { HumanManagerComponent } from './human-manager.component';

describe('HumanManagerComponent', () => {
  let component: HumanManagerComponent;
  let fixture: ComponentFixture<HumanManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanManagerComponent ],
      imports: [
        CreateHumanComponent,
        BrowserAnimationsModule,
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

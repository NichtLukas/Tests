import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CreateHumanComponent } from './human/create-human.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CreateHumanComponent,
        ToolbarComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AppComponent).toBeTruthy();
  });
});

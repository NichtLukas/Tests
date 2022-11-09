import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports:[
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class ToolbarComponent {
  public title:string = "Human Manager";
}

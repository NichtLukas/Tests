import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HumanCreate } from '../human';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-human',
  templateUrl: './create-human.component.html',
  // stlyes oder style-urls
  styles:[`
    mat-form-field {
      width: 100%;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CreateHumanComponent implements OnInit {

  // TODO: create typed FormGroup
  public readonly form: FormGroup = new FormGroup /*<HumanCreate>*/({
    name: new FormControl<string|null>(null, [Validators.required]),
    age: new FormControl<number|null>(null, [Validators.required]),
  });

  // Auf die Werte im Form zugreifen
  public get nameFormControl(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  public get ageFormControl(): FormControl {
    return this.form.controls['age'] as FormControl;
  }

  @Output('human') public humanEmitter = new EventEmitter<HumanCreate>();

  public ngOnInit(): void {
    // funktionen auslagern um es lesbarer zu machen
    this.initializeForm();
  }

  public readFormKeyInput(event:any): void{
    this.autoSaveHumanForm();
    if (!(event.keyCode === 13)) return;
    this.sendFormValue();
  }

  private initializeForm(): void {
    //Form nach der Implementierung mit verändern
    this.ageFormControl.patchValue(18);
    this.nameFormControl.patchValue('Max Mustermann');
  }

  private async autoSaveHumanForm():Promise<void>{
    await new Promise(resolve => setTimeout(resolve, 10000));
    this.sendFormValue();
  }

  private sendFormValue():void{
    if (this.form.invalid) return;
    this.humanEmitter.emit(this.form.value);
    this.form.reset();
  }


}

import { Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DEFAULT_HUMAN, HumanCreate, HumanCreateForm } from '../human';
import { BehaviorSubject, debounceTime, Subject, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-create-human',
  templateUrl: './create-human.component.html',
  styleUrls: ['./create-human.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

  ],

})
export class CreateHumanComponent implements OnInit, OnDestroy {
  public readonly form: FormGroup = new FormGroup <HumanCreateForm>({
    name: new FormControl<string|null>(null, [Validators.required]),
    age: new FormControl<number|null>(null, [Validators.required]),
  });

  private readonly _form$: BehaviorSubject<FormGroup>  = new BehaviorSubject<FormGroup>(this.form);
  private readonly _destroyed$ = new Subject<void>();


  // Auf die Werte im Form zugreifen
  public get nameFormControl(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  public get ageFormControl(): FormControl {
    return this.form.controls['age'] as FormControl;
  }

  @Output('human') public humanEmitter = new EventEmitter<HumanCreate>();

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeFormObservers();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public readFormKeyInput(): void{
    this._form$.next(this.form)
  }
  
  public emitFormValue():void{
    if(this.form.invalid) return;
    this.humanEmitter.emit(this.form.value);
    this.form.reset();
  }

  private initializeForm(): void {
    this.ageFormControl.patchValue(DEFAULT_HUMAN.age);
    this.nameFormControl.patchValue(DEFAULT_HUMAN.name);
  }

  private initializeFormObservers() {
    this._form$.pipe(
      takeUntil(this._destroyed$),
      debounceTime(5000)
      ).subscribe((data) =>{
      this.emitFormValue();
    });
  }

}

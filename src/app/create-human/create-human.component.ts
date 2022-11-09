import { Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import { Keycodes } from '../keycodes';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HumanCreate } from '../human';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, debounce, debounceTime, fromEvent, Subject, takeUntil } from 'rxjs';

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
  // TODO: create typed FormGroup
  public readonly form: FormGroup = new FormGroup /*<HumanCreate>*/({
    name: new FormControl<string|null>(null, [Validators.required]),
    age: new FormControl<number|null>(null, [Validators.required]),
  });

  private readonly _form$: BehaviorSubject<FormGroup>;
  private readonly _destroyed$ = new Subject<void>();



  // Auf die Werte im Form zugreifen
  public get nameFormControl(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  public get ageFormControl(): FormControl {
    return this.form.controls['age'] as FormControl;
  }

  @Output('human') public humanEmitter = new EventEmitter<HumanCreate>();

  constructor(){
    this._form$ = new BehaviorSubject<FormGroup>(this.form);
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeFormObservers();
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public readFormKeyInput(): void{
    this._form$.next(this.form)
  }

  private initializeForm(): void {
    this.ageFormControl.patchValue(18);
    this.nameFormControl.patchValue('Max Mustermann');
  }

  private initializeFormObservers() {
    this._form$.pipe(
      takeUntil(this._destroyed$),
      debounceTime(5000)
      ).subscribe((data) =>{
      if(data.invalid) return;
      this.sendFormValue();
    });
    
  }

  //TODO: kann vieleicht weg?
  private sendFormValue():void{
    this.humanEmitter.emit(this.form.value);
    this.form.reset();
  }


}

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/debouncetime

/**
 * TODO:
 * 1. sibscription auf form
 * 2. on valuechange and valid form execute
 */
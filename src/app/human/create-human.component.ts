import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, debounceTime, Subject, takeUntil } from 'rxjs';
import { HumanCreate, HumanCreateForm } from './human.model';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-human',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  template:`
  <form [formGroup]="form" class="form" (keydown)="readFormKeyInput()">
  <mat-form-field appearance="fill" class="formfield">
    <mat-label>Name</mat-label>
    <input matInput type="text" formControlName="name" aria-label="nameInput">
    <button  matSuffix mat-icon-button (click)="nameFormControl.reset()" aria-label="nameInputReset">
      <mat-icon>close</mat-icon>
    </button>
    <mat-error *ngIf="nameFormControl.hasError('required')" aria-label="errorMessageName">
      This is required!
    </mat-error>
  </mat-form-field>

  <mat-form-field appearance="fill" class="formfield">
    <mat-label>Age</mat-label>
    <input matInput type="number" formControlName="age" aria-label="ageInput">
    <button matSuffix mat-icon-button (click)="ageFormControl.reset()" aria-label="ageInputReset">
      <mat-icon>close</mat-icon>
    </button>
    <mat-error *ngIf="nameFormControl.hasError('required')" aria-label="errorMessageAge">
      This is required!
    </mat-error>
  </mat-form-field>

  <button mat-raised-button class="button" (click)="emitFormValue()" [disabled]="!this.form.valid">Add</button>
 
</form>
  `,
  styles:[`
  .form{
    margin-top: 20px;
    margin-left: 5%;
    width: max(450px, 50%);
    display: flex;
    justify-content:space-between;
  }
  .formfield{
    box-sizing: border-box;
    width: max(10%,40%);
  }
  button{
    height: 50px;
  }
`]


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
  
  public emitFormValue():boolean{
    if(this.form.invalid) return false;
    this.humanEmitter.emit(this.form.value);
    this.form.reset();
    return true;
  }

  private initializeForm(): void {
    // this.ageFormControl.patchValue(DEFAULT_HUMAN.age);
    // this.nameFormControl.patchValue(DEFAULT_HUMAN.name);
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

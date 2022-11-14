import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


const materialModules = [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
];


@NgModule({
    imports: [
        CommonModule,
        ...materialModules,
    ],
    exports: [
        ...materialModules,
    ],
})

export class AngularMaterialModule { };
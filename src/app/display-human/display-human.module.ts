import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


const materialModules = [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
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

export class AngularMaterialModuleDisplayHuman { };
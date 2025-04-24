import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const material = [
  MatButtonModule,CommonModule, MatCardModule, MatDialogModule, MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    ...material
  ],
  exports: [
    ...material
  ]
})
export class MaterialModule { }

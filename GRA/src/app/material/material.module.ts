import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatToolbarModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule
  ],
  exports: [MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule],
  declarations: []
})
export class MaterialModule { }

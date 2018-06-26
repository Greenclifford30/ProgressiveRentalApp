import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule
  ],
  exports: [MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule],
  declarations: []
})
export class MaterialModule { }

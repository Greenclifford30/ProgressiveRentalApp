import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule, MatChipsModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MatInputModule, MatSelectModule, MatChipsModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatExpansionModule
  ],
  exports: [MatInputModule, MatSelectModule, MatChipsModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatExpansionModule],
  declarations: []
})
export class MaterialModule { }

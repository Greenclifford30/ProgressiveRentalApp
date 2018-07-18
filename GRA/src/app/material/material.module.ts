import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatSnackBarModule, MatChipsModule, MatDialogModule, MatButtonToggleModule, MatStepperModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatSnackBarModule, MatChipsModule, MatDialogModule, MatButtonToggleModule, MatStepperModule
  ],
  exports: [MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatSnackBarModule, MatChipsModule, MatDialogModule, MatButtonToggleModule, MatStepperModule],
  declarations: []
})
export class MaterialModule { }

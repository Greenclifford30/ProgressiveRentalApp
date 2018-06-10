import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatCardModule, MatExpansionModule, MatStepperModule, MatTabsModule, MatBadgeModule, MatBottomSheetModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatInputModule, MatCardModule, MatExpansionModule, MatStepperModule, MatTabsModule, MatBadgeModule, MatBottomSheetModule],
  exports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatInputModule, MatCardModule, MatExpansionModule, MatStepperModule, MatTabsModule, MatBadgeModule, MatBottomSheetModule],
})
export class MaterialModule { }
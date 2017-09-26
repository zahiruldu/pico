import { NgModule } from '@angular/core';
import {MdSelectModule, MdExpansionModule, MdMenuModule,MdButtonModule, MdCheckboxModule,MdCardModule, MdGridListModule} from '@angular/material';

@NgModule({
  imports: [
      MdMenuModule,
      MdButtonModule, 
      MdCheckboxModule,
      MdCardModule,
      MdGridListModule,
      MdExpansionModule,
      MdSelectModule
  ],
  exports: [
      MdMenuModule,
      MdButtonModule, 
      MdCheckboxModule,
      MdCardModule,
      MdGridListModule,
      MdExpansionModule,
      MdSelectModule
  ],
})
export class MyCustomMaterialModule { }
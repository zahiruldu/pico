import { NgModule } from '@angular/core';
import {MdMenuModule,MdButtonModule, MdCheckboxModule,MdCardModule, MdGridListModule} from '@angular/material';

@NgModule({
  imports: [
      MdMenuModule,
      MdButtonModule, 
      MdCheckboxModule,
      MdCardModule,
      MdGridListModule
  ],
  exports: [
      MdMenuModule,
      MdButtonModule, 
      MdCheckboxModule,
      MdCardModule,
      MdGridListModule
  ],
})
export class MyCustomMaterialModule { }
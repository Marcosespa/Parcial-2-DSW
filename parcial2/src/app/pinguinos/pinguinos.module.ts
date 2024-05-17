import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinosListComponent } from './pinguinos-list/pinguinos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PinguinosListComponent],
  declarations: [PinguinosListComponent]
})
export class PinguinosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinosListComponent } from './pinguinos-list/pinguinos-list.component';
import { PinguinosDetailComponent } from './pinguinos-detail/pinguinos-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PinguinosListComponent],
  declarations: [PinguinosListComponent,PinguinosDetailComponent]
})
export class PinguinosModule { }

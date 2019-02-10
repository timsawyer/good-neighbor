import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class DetailModule {}
